const Sabor = require("../models/saborDados.js")

exports.getSabor = async (req,res) => {
    const sabores = await Sabor.find()
    res.json(sabores)
}

exports.addSabor = async (req, res) => { 
    const {name} = req.body
    if(!name) return res.status(400).json({error: "nome é obrigatório!"})
    
    const saborNovo = new Sabor({name}) 
    await saborNovo.save()
    res.status(200).json(saborNovo)
    }

exports.delSabor = async (req,res) => {
    const {id} = req.params
    await Sabor.findByIdAndDelete(id)
    res.status(204).end()
}

