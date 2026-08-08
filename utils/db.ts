// import { PrismaClient } from "@prisma/client";
// // import { PrismaClient } from "../generated/prisma/client";
// import { PrismaPg } from "@prisma/adapter-pg";

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined;
// };

// const prismaClientSingleton = () => {
//   const connectionString = process.env.DATABASE_URL;

//   if (!connectionString) {
//     throw new Error(
//       "DATABASE_URL is missing. Add DATABASE_URL to your .env file.",
//     );
//   }

//   const adapter = new PrismaPg({
//     connectionString,
//   });

//   return new PrismaClient({
//     adapter,
//   });
// };

// export const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

// if (process.env.NODE_ENV !== "production") {
//   globalForPrisma.prisma = prisma;
// }
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
