'use strict';

const express = require('express');
const dataModules = require('../models');
const router = express.Router();
const bearer = require('../src/middlewares/bearer');
const permissions = require('../src/middlewares/acl');

router.param('model', (req, res, next) => {
  const modelName = req.params.model;
  if (dataModules[modelName]) {
    req.model = dataModules[modelName];
    next();
  } else {
    next('Invalid Model');
  }
});

router.get('/:model', handleGetAll);
router.get('/:model/:id', handleGetOne);
// router.get('/:model', handleGet222);

router.post('/:model',bearer,permissions('createPet'), handleCreate);
router.put('/:model/:id',bearer,permissions('updatePet'), handleUpdate);
router.delete('/:model/:id',bearer,permissions('deletePet'), handleDelete);

async function handleGetAll(req, res) {
  let allRecords = await req.model.get();
  res.status(200).json(allRecords);
}
// api/v2/cats?username=mayadah2
// async function handleGet222(req, res) {
//   const id = req.query.id;
//   console.log('username',username);
//   let theRecord = await req.model.get2(id)
//   console.log('reacord queryy', theRecord);
//   res.status(200).json(theRecord);
// }
async function handleGetOne(req, res) {
  const id = req.params.id;
  let theRecord = await req.model.get(id)
  res.status(200).json(theRecord);
}

async function handleCreate(req, res) {
  let obj = req.body;
  let newRecord = await req.model.create(obj);
  res.status(201).json(newRecord);
}

async function handleUpdate(req, res) {
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await req.model.update(id, obj)
  res.status(200).json(updatedRecord);
}

async function handleDelete(req, res) {
  let id = req.params.id;
  let deletedRecord = await req.model.delete(id);
  res.status(200).json(deletedRecord);
}


module.exports = router;


