const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");
const products = require("./products.json");

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  console.log(`Found ${products.length} products`);

  for (const product of products) {
    const created = await prisma.product.create({
      data: product,
    });

    console.log(`Created: ${created.name}`);
  }

  console.log("✅ Seed completed successfully!");
}

main()
  .catch((error) => {
    console.error("❌ Seed failed:");
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
