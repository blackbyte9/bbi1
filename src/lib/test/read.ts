import prisma from "../prisma";

interface Test {
  id: number;
  name: string;
  size: string;
}

export async function readTests(): Promise<Test[]> {
  const dbTests = await prisma.test.findMany();

  // Map DB fields to Test type
  return dbTests.map(({ id, name, size }) => ({
    id,
    name,
    size,
  }));
}
