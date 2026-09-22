import { z } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "name must be at least 2 characters.",
    })
    .max(100, {
      message: "name must be less than 100 characters.",
    }),

  company: z.string(),

  featured: z.coerce.boolean(),

  price: z.coerce.number().min(0, {
    message: "price must be a positive number.",
  }),

  description: z.string().refine(
    (description) => {
      const wordCount = description.trim().split(/\s+/).length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    {
      message: "description must be between 10 and 1000 words.",
    },
  ),
});

export const imageSchema = z.object({
  image: validateImageFile(),
});

function validateImageFile() {
  const maxUploadSize = 1024 * 1024;
  const acceptedFileType = ["image/"];

  return z
    .instanceof(File)
    .refine(
      (file) => file.size <= maxUploadSize,
      "File size must be less than 1MB",
    )
    .refine(
      (file) => acceptedFileType.some((type) => file.type.startsWith(type)),
      "File must be an image",
    );
}

export const validateWithZodSchema = <T>(
  schema: z.ZodSchema<T>,
  data: unknown,
): T => {
  const result = schema.safeParse(data);

  if (!result.success) {
    console.log("❌ Zod validation failed");
    console.log("Data received:", data);
    console.log(
      "Zod issues:",
      result.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
        received: issue.code === "invalid_type" ? issue.received : undefined,
      })),
    );

    throw new Error(
      result.error.issues
        .map(
          (issue) =>
            `${issue.path.join(".") || "unknown field"}: ${issue.message}`,
        )
        .join(", "),
    );
  }

  return result.data;
};

export const reviewSchema = z.object({
  productId: z.string(),
  authorName: z.string(),
  authorImage: z.string(),
  rating: z.coerce.number().int().min(1).max(5),
  comment: z.string().min(1, {
    message: "Review comment is required",
  }),
});
