import { CategorySeeder } from "./CategorySeeder";

class Seeder {
  static async run() {
    await CategorySeeder.run();
  }
}

Seeder.run();
