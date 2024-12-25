import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
 
  // Insert data into the `problems` table
//   for (const problem of problems) {
//     await prisma.problem.create({
//       data: problem,
//     });
//   }

  console.log('Seed data inserted successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
