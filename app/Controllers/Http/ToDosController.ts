import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from "@ioc:Adonis/Lucid/Database"
import ToDo from 'App/Models/ToDo'

export default class ToDosController {

    public async getall(ctx: HttpContextContract) {
        ctx.response.send({ message: "Liste des ToDos", data: await Database.query().from('to_dos')})
    }

    public async getone(ctx: HttpContextContract) {
        ctx.response.send({ message: "ToDo n°" + ctx.request.param('id'), data: await Database.query().from('to_dos').where('id', ctx.request.param('id'))})
    }

    public async create(ctx: HttpContextContract) {
        const { title, description, status, dueDate } = ctx.request.body()
        const todo = await (await ToDo.create({ title, description, status, dueDate })).save()
        ctx.response.send({ message: "La ToDo a été créée", data: await Database.query().from('to_dos').where('id', todo.id)})
    }

    public async update(ctx: HttpContextContract) {
        const { title, description, status, dueDate } = ctx.request.body()
        const todo = await ToDo.findOrFail(ctx.request.param('id'))
        todo.title = title
        todo.description = description
        todo.status = status
        todo.dueDate = dueDate
        await todo.save()
        ctx.response.send({ message: "La ToDo a été modifiée", data: await Database.query().from('to_dos').where('id', todo.id)})
    }

    public async delete (ctx: HttpContextContract) {
        const todo = await ToDo.findOrFail(ctx.request.param('id'))
        await todo.delete()
        ctx.response.send({ message: "La ToDo a été supprimée", data: todo})
    }

}
