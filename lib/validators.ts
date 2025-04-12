import { z } from "zod";
import { formatNumberWithDecimal } from "@/lib/utils";

const currency = z
  .string()
  .refine((value) =>
    /^d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
  );

export const insertProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  category: z.string(),
  brand: z.string(),
  description: z.string(),
  stock: z.coerce.number(),
  images: z.array(z.string()),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});

// Schema for users sign in
export const signInFormSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// Schema for users sign up
export const signUpFormSchema = z
  .object({
    name: z.string(),
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password should be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords should match",
    path: ["confirmPassword"],
  });
