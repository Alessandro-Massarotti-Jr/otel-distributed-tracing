import "dotenv/config";
import { ProductSeeder } from "./ProductSeeder";
class Seeder {
  static async run() {
    await ProductSeeder.run();
  }
}
Seeder.run();
