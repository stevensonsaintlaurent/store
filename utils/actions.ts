"use server";

import { redirect } from "next/navigation";
import db from "./db";
import { currentUser } from "@clerk/nextjs/server";
import { imageSchema, productSchema } from "./schemas";
import { validateWithSchema } from "./schemas";

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) redirect("/");
  return user;
};

const renderError = (error: unknown): { message: string } => {
  return {
    message:
      error instanceof Error ? error.message : "An unknown error occurred",
  };
};

export const fetchFeaturedProducts = async () => {
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
  });

  return products;
};

export const fetchAllProducts = async ({
  search = "",
}: {
  search?: string;
} = {}) => {
  return db.product.findMany({
    where: {
      OR: [
        {
          name: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          company: {
            contains: search,
            mode: "insensitive",
          },
        },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const fetchSingleProduct = async (productId: string) => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) redirect("/products");
  return product;
};

export const createProductAction = async (
  prevState: any,
  formData: FormData,
): Promise<{ message: string }> => {
  const user = await getAuthUser();
  try {
    const rawData = Object.fromEntries(formData);
    const file = formData.get("image") as File;
    const validatedFields = validateWithSchema(productSchema, rawData);
    const validateFile = validateWithSchema(imageSchema, { image: file });
    await db.product.create({
      data: {
        ...validatedFields,
        image: "/images/test.png",
        clerkId: user.id,
      },
    });

    return { message: "product created" };
  } catch (error) {
    return renderError(error);
  }
};
