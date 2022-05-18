const AccesoProhibidoException = use('App/Exceptions/AccesoProhibidoException');
const RecusrsoNoEncontradoException = use('App/Exceptions/RecusrsoNoEncontradoException');

class AutorizacionService {
    verificarPermiso(recurso, user){

        if (!recurso){
            throw new RecusrsoNoEncontradoException();
        }

        if (recurso.user_id !== user.id){
            throw new ErroAccesoProhibidoException();
        };
    }
}

module.exports = new AutorizacionService();