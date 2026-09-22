import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = globalThis as unknown as {
  db: PrismaClient | undefined;
};

const dbClient = () => {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL is not defined");
  }

  const adapter = new PrismaPg({
    connectionString,
  });

  return new PrismaClient({
    adapter,
  });
};

const db = globalForPrisma.db ?? dbClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.db = db;
}

export default db;
