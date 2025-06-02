const mongoose = require("mongoose")

const saborDados = new mongoose.Schema({
    name: {
        type:String,
        required: true,
    }
})

module.exports = mongoose.model("Sabor", saborDados)