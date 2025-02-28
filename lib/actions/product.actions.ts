"use server";
import { prisma } from "@/db/prisma";
import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";

// Get all products
export const getLatestProducts = async () => {
  return prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: {
      createdAt: "desc",
    },
  });
};

// Get product by slug
export const getProductBySlug = async (slug: string) => {
  return prisma.product.findFirst({
    where: {
      slug,
    },
  });
};
