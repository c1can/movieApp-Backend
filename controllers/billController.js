const User = require('../models/UserModel')
const Bill = require('../models/billModel')

const getBill = (req, res, next) => {
    Bill.find({})
        .then(result => {
            return !result
                ? res.status(400).end() 
                : res.status(200).json(result)
        }).catch(next)
}

const getBillById = (req, res, next) => {
    const { id } = req.params  //id = del usuario

    Bill.find({user: id}) 
        .then(result => {
            return !result 
                ? res.status(400).end({error: 'id no encontrada'})
                : res.status(200).json(result)
        }).catch(next)

}

const addBill = async(req, res, next) => {
    const { butacas, total, userId } = req.body

    if(JSON.stringify(req.body) == '{}') return res.status(400).end()

    const foundUser = await User.findById(userId)

    const newBill = new Bill({
        fecha_reservacion: new Date().toLocaleDateString(),
        butacas: butacas,
        total: total,
        user: foundUser._id
    })

    try {
        const savedBill = await newBill.save()

        foundUser.reservaciones = foundUser.reservaciones.concat(savedBill._id)
        await foundUser.save()

        res.status(200).json(savedBill)  
    } catch (error) {
        next(error)
    }
}

module.exports = { getBill, getBillById, addBill }