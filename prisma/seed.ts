import { PrismaClient, Prisma } from "../src/generated/prisma";

const prisma = new PrismaClient();

const userData: Prisma.TestCreateInput[] = [
  {
    name: "Bier",
    size: "Large",
    approved: true,
  },
  {
    name: "Cola",
    size: "Large",
    approved: true,
  },

];

export async function main() {
  for (const u of userData) {
    await prisma.test.create({ data: u });
  }
}

main();