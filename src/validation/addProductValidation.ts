import { z } from "zod";

export const ProductSchema = z.object({
  category: z.string().optional(),
  description: z
    .string()
    .min(20, "Description should contain at least 20 characters")
    .max(1000, "Description should not exceed more than 1000 characters"),
  mainImage: z
    .any()
    .refine((file) => file && file.length === 1, "Main image is required")
    .refine(
      (file) => file && file[0]?.type === "image/png",
      "Only .png format is supported"
    ),
  name: z
    .string()
    .min(4, "Title must contain more than 4 characters")
    .max(50, "Title should not exceed more than 50 characters"),
  price: z.number(),
  stock: z
    .number()
    .min(1, "You have to add more than 1 stock")
    .max(1000, "You can't add more than 1000 stocks at a time"),
  subImages: z.string().optional(),
});
