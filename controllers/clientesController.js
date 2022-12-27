const User = require('../models/UserModel')

const getClientes = (req, res) => {
    User.find({})
        .then(result => {
            return !result 
                ? res.status(400).end() 
                : res.status(200).json(result)
        }).catch(() => res.status(400).end()) 
}

const editClientes = (req, res, next) => {
    const { id } = req.params
    const { rol, creditos } = req.body

    if(JSON.stringify(req.body) == '{}') return res.status(400).json({ error: 'ingresa al menos un dato!' })
    if(rol || creditos) {

        const editedUser = {
            creditos: creditos,
            rol: rol
        }

        User.findByIdAndUpdate(id, editedUser)
            .then(result => {
                return result
                    ? res.status(200).json({success: 'usuario editado exitosamente'})
                    : res.status(404).json({error: 'id no encontrado'})
            }).catch(next)
    }
}

const deleteCliente = (req, res, next) => {
    const { id } = req.params

    User.findByIdAndDelete(id)
        .then(result => {
            return result
                ? res.status(301).json({message: 'cliente eliminado'})
                : res.status(404).json({ error: 'id no encontrado' })
        }).catch(next)
}


module.exports = { getClientes, editClientes, deleteCliente }