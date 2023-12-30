import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'to_dos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.string('title').notNullable()
      table.text('description').nullable()
      table.string('status').notNullable()
      table.dateTime('due_date').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
