'use strict'

//models
const cardModel = require('../models/cards');

const getAllCards = async (req,res)=>{
	try{
		const cards = await cardModel.find({active: true})
		res.status(200).send(cards)
	}
	catch(e){
		console.log(e)
		res.status(500).send(e)
	}
}

const getCardByID = async (req,res)=>{
	try{
		const cardFound = await cardModel.findById(req.params.idCard)
		res.status(200).send(cardFound)
	}
	catch(e){
		console.log(e)
		res.status(500).send(e)
	}
}

const createCard = async (req,res)=>{
	try{
		const {url, type, number} = req.body
		let card = new cardModel();
		card.url = url;
		card.type = type;
		card.number = number;
		const cardSave = await card.save();
		res.status(200).send(cardSave)
	}
	catch(e){
		console.log(e)
		res.status(500).send(e)
	}
}

const updateCard = async (req,res)=> {
	try{
		const {url, type, number, active} = req.body
		let card = {
		url : url,
		type : type,
		number : number,
		active : active,
		}
		const cardUpdate = await cardModel.findByIdAndUpdate(req.params.idCard, {$set : card}, {new : true})
		res.status(200).send(cardUpdate)
	}
	catch(e){
		console.log(e)
		res.status(500).send(e)
	}
}

const deleteCard = async (req,res)=> {
	try{
		const cardDelete = await cardModel.findByIdAndUpdate(req.params.idCard, {$set : {active: false}}, {new : true})
		res.status(200).send(cardDelete)
	}
	catch(e){
		console.log(e)
		res.status(500).send(e)
	}
}

module.exports = {
	getAllCards,
	getCardByID,
	createCard,
	updateCard,
	deleteCard,
}
