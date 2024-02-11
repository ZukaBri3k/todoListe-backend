import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ToDoFactory } from 'Database/factories/ToDoFactory'

export default class extends BaseSeeder {
  public async run() {
    await ToDoFactory.createMany(10)
  }
}
