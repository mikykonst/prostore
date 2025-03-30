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
