const Sabor = require("../models/saborDados.js")

exports.getSabor = async (req, res) => {
  try {
    const sabores = await Sabor.find()
    res.json(sabores)
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar sabores." })
  }
}

exports.addSabor = async (req, res) => {
  const { name, valor, description } = req.body

  if (!name || !valor || !description) {
    return res.status(400).json({ error: "Informações obrigatórias!" })
  }

  try {
    const saborNovo = new Sabor({ name, valor, description })
    await saborNovo.save()
    res.status(201).json(saborNovo)
  } catch (err) {
    res.status(500).json({ error: "Erro ao adicionar sabor." })
  }
}

exports.delSabor = async (req, res) => {
  const { id } = req.params

  try {
    const deletado = await Sabor.findByIdAndDelete(id)

    if (!deletado) {
      return res.status(404).json({ error: "Sabor não encontrado." })
    }

    res.status(204).end()
  } catch (err) {
    res.status(500).json({ error: "Erro ao remover sabor." })
  }
}
