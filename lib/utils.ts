import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Covert prisma object to plain object
export const convertPrismaObject = <T>(prismaObject: T): T => {
  return JSON.parse(JSON.stringify(prismaObject));
};

export const formatNumberWithDecimal = (value: number) => {
  const [integer, decimal] = value.toFixed(2).split(".");

  return decimal ? `${integer}.${decimal.padEnd(2, "0")}` : `${integer}.00`;
};
