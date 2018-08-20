'use strict'

const { model } = require('../Entities/petEntity')

const petRepository = {
  all: () => model().find().populate('usersIds')
}

module.exports = petRepository