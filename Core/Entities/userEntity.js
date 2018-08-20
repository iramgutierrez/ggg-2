'use strict'

const Waterline = require('waterline')

const userEntity = {
  schema: {
    attributes: {
      _id: {
        type: 'string',
        required: true
      },
      /*petsIds: {
        model: 'pet'
      },*/
      petsIds: {
        collection:'pet',
        via: 'usersIds',
        dominant: true
      },
      emailAddress: { type: 'string', required: true },
      firstName: { type: 'string' },
      lastName: { type: 'string' },
      numChickens: { type: 'number' }
    },
    primaryKey: '_id',
    datastore: 'mongo',
    autoIncrement: true
  },
  model: () => Waterline.getModel('user', orm)
}

module.exports = userEntity