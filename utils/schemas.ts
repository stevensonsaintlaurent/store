import { z, ZodSchema } from "zod";
export const productSchema = z.object({
  name: z.string().min(4),
  company: z.string().min(4),
  price: z.coerce.number().min(4),
  description: z.string(),
  featured: z.coerce.boolean(),
});
