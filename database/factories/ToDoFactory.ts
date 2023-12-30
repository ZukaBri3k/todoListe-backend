import ToDo from 'App/Models/ToDo'
import Factory from '@ioc:Adonis/Lucid/Factory'
import { DateTime } from 'luxon' // Add this import

export const ToDoFactory = Factory
    .define(ToDo, ({ faker }) => {
        return {
            title: faker.lorem.words(5),
            description: faker.lorem.words(30),
            status: 'En cours',
            dueDate: DateTime.fromJSDate(faker.date.future()), // Change the type to DateTime
        }
    }).build()
