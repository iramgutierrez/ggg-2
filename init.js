'use strict'

const Waterline = require('waterline')
const MySQLAdapter = require('sails-mysql')
const MongoAdapter = require('sails-mongo')

const user = require('./Core/Entities/userEntity')
const pet = require('./Core/Entities/petEntity')

const init = {
  waterline: () => {
    return new Promise((resolve, reject) => {
      Waterline.start({
        adapters: {
            'sails-mysql': MySQLAdapter,
            'sails-mongo': MongoAdapter,
        },
        datastores: {
            mysql: {
            adapter: 'sails-mysql',
            url: 'localhost/waterline_1',
            user: 'root',
            password: 'GigigoMX16'
            },
            mongo: {
            adapter: 'sails-mongo',
            host: 'localhost',
            port: 27017,
            database: 'waterline_1'
            }
        },
        models: {
            user: user.schema,
            pet: pet.schema,
            userpet: {
              attributes: {
                id: {
                  type: 'string',
                  required: true
                },
                userId:{
                  model:'user'
                },
                petId: {
                  model: 'pet'
                }
              },
              primaryKey: 'id',
              datastore: 'mysql',
            }
        }
        }, (err, orm) => {
        if(err) {
          return reject(err)
        }
        global.orm = orm
        return resolve()
      })
    })
  }
}

module.exports = init

