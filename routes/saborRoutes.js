const express = require('express');
const router = express.Router(); 
const {addSabor, delSabor, getSabor } = require('../controllers/saborController.js')

router.get('/', getSabor)
router.post('/', addSabor)
router.delete('/:id', delSabor)

module.exports = router

