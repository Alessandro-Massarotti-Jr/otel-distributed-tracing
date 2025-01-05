import { prismaClient } from "../config/prisma";

export class CategorySeeder {
  static async run() {
    const categories: string[] = ["sample", "category", "best"];
    for (const category of categories) {
      await prismaClient.category.upsert({
        create: {
          name: category,
        },
        update: {
          name: category,
        },
        where: {
          name: category,
        },
      });
    }
  }
}
