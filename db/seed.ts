import { PrismaClient } from "@prisma/client";
import sampleData from "@/db/sample-data";

const main = async () => {
  try {
    const prisma = new PrismaClient();
    await prisma.product.deleteMany();
    await prisma.account.deleteMany();
    await prisma.user.deleteMany();
    await prisma.session.deleteMany();
    await prisma.verificationToken.deleteMany();

    await prisma.product.createMany({ data: sampleData.products });
    await prisma.user.createMany({ data: sampleData.users });

    console.log("Seed complete");
  } catch (err) {
    console.error("Error seeding database", err);
  }
};

main();
