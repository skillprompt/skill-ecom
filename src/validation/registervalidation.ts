import {z} from "zod"

 export const registerSchema = z
  .object({
    username: z.string().toLowerCase(),
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    role: z.string().toUpperCase(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 character" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "password must match",
    path: ["confirmPassword"],
  });