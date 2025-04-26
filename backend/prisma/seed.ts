// prisma/seed.ts

import { PrismaClient } from '../generated/prisma';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.todo.upsert({
    where: { title: 'Prisma Adds Support for MongoDB' },
    update: {},
    create: {
      title: 'Prisma Adds Support for MongoDB',
      description:
        "We are excited to share that today's Prisma ORM release adds stable support for MongoDB!",
    },
  });

  const post2 = await prisma.todo.upsert({
    where: { title: "What's new in Prisma? (Q1/22)" },
    update: {},
    create: {
      title: "What's new in Prisma? (Q1/22)",
      description:
        'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
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
    prisma.$disconnect();
  });
