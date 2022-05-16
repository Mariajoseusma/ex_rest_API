'use strict'

const Proyecto = use('App/Models/Proyecto')

class ProyectoController {
    async index({ auth }){
        const user = await auth.getUser();
        //console.log(user.id);
        return await user.proyectos().fetch();        
    }

    async create({auth, request}){
        const user = await auth.getUser();
        const { nombre } = request.all();
        const proyecto = new Proyecto();
        proyecto.fill({
            nombre
        });
        await user.proyectos().save(proyecto)
        return proyecto;
    }
}

module.exports = ProyectoController
