'use strict'

const Waterline = require('waterline')

const entity = {
  schema: {
    attributes: {
      _id: { 
        type: 'string', 
        required: true 
      },
      /*usersIds: {
        model: 'user'
      },*/
      usersIds:{
        collection:'user',
        via: 'petsIds',
      },
      name: { type: 'string', required: true },
      breed: {
        type: 'string',
        validations: {
          isIn: ['chihuahua', 'great dane', 'collie', 'unknown']
        },
        defaultsTo: 'unknown'
      }
    },
    primaryKey: '_id',
    datastore: 'mongo',
    autoIncrement: true
  },
  model: () => Waterline.getModel('pet', orm)
}

module.exports = entity