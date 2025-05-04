// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.todo.create({
    data: {
      text: 'Prisma Adds Support for MongoDB',
    },
  });

  const post2 = await prisma.todo.create({
    data: {
      text: "What's new in Prisma? (Q1/22)",
    },
  });

  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    // close Prisma Client at the end
    prisma.$disconnect();
  });
