// Dependencies
const express = require('express');
const endpoints = express.Router();
const { Idea } = require('../db');

// Endpoints

// getAll Users rows
endpoints.get('/', async (request, response) => {
  const users = await Idea.findAll();
  if(users != undefined){
    response.send(users)
  }else{
    response.status(404)
  }
})

// get User row
endpoints.get('/:id', async (request, response) => {
  const user = await Idea.findAll({
    where: {
      id: Number(request.params.id)
    }
  });
  if(user != undefined){
    response.send(user)
  }else{
    response.status(404)
  }
})

// create User row
endpoints.post('/', async (request, response) => {
  console.log(request.body)
  const user = await Idea.create(request.body);
  if(user != undefined){
    response.json(user)
    response.status(200)
  }else{
    response.status(404)
  }
})

// update User row
endpoints.put('/:id', async (request, response) => {
  console.log(request.body)
  try{
    const a = await Idea.update(request.body, {
      where: {
        id: Number(request.params.id)
      }
    });
    if(a == 1){
      response.json({status : "200"})
      response.status(200)
    } else{
      response.json({status : "404"})
      response.status(404)
    }
  }catch{
    response.status(404)
  }
})

// update User row
endpoints.delete('/:id', async (request, response) => {
  console.log(request.body)
  try{
    const a = await Idea.destroy({
      where: {
        id: Number(request.params.id)
      }
    });
    if(a == 1){
      response.json({status : "200", message: "Row Eliminated"})
      response.status(200)
    } else{
      response.json({status : "404", message: "Wrong Params"})
      response.status(404)
    }
  }catch{
    response.status(404)
  }
})

module.exports = endpoints