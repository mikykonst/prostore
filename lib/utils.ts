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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export function formatErrorMessage(error) {
  if (error.name === "ZodError") {
    const errorFields = Object.keys(error.errors).map(
      (field) => error.errors[field].message,
    );

    return errorFields.join(",");
  } else if (
    error.name === "PrismaClientKnownRequestError" &&
    error.code === "P2002"
  ) {
    const field: string = error.meta?.target?.[0] ?? "Field";

    // Make first letter of field uppercase
    const formattedField = field.charAt(0).toUpperCase() + field.slice(1);

    return `${formattedField} already exists`;
  }

  return "An error occurred";
}
