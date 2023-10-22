import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //Create user
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "John Doe",
  //       email: "john@gmail.com",
  //     },
  //   });
  // #################################################################
  //Get all users
  const users = await prisma.user.findMany({
    include: { articles: true },
  });
  // #################################################################
  //Create article
  //   const article = await prisma.article.create({
  //     data: {
  //       title: "John's article",
  //       body: "This is John's article",
  //       author: {
  //         connect: {
  //           id: 1,
  //         },
  //       },
  //     },
  //   });
  // #################################################################
  //Get all articles
  //   const articles = await prisma.article.findMany();

  // #################################################################

  //Create user and article and associate them
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Sara",
  //       email: "Sara@gmail.com",
  //       articles: {
  //         create: {
  //           title: "Sara's article",
  //           body: "This is Sara's article",
  //         },
  //       },
  //     },
  //   });

  // #################################################################

  //Update user
  //   const user = await prisma.user.update({
  //     where: { id: 1 },
  //     data: {
  //       name: "John Doe Jr.",
  //     },
  //   });

  // #################################################################

  //Remove data
  //   const article = await prisma.article.delete({
  //     where: {
  //       id: 2,
  //     },
  //   });
  //   console.log(articles);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .then(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
