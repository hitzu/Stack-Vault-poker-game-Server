'use strict'
const express = require('express');
const CardController = require("../controllers/card.controller");
var api = express.Router();

api.get('/', CardController.getAllCards);
api.get('/:idCard', CardController.getCardByID);
api.post('/', CardController.createCard);
api.put('/:idCard', CardController.updateCard);
api.delete('/:idCard', CardController.deleteCard)

module.exports = api;