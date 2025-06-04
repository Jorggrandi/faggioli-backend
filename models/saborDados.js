const mongoose = require("mongoose")

const saborSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  valor: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("Sabor", saborSchema)
