import { PrismaClient } from '@prisma/client';
import { problems } from './data/problemsData';

const prisma = new PrismaClient();

async function main() {

  // Insert data into the `problems` table
  for (const problem of problems) {
    await prisma.problem.create({
      data: {
        title: problem.title,
        description: problem.description,
        difficulty: problem.difficulty,
        testCases: {
          create: problem.testCases.map((testCase) => ({
            input: testCase.input,
            output: testCase.output,
          })),
        },
        template: {
          create: problem.template.map((temp) => ({
            language: temp.language,
            languageId: temp.languageId,
            starterCode: temp.starterCode,
            stdInRetrievalCode: temp.stdInRetrievalCode,
            finalCode: temp.finalCode,
          })),
        }

      }
    });
  }

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
