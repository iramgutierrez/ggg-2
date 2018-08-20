'use strict'

const { model } = require('../Entities/userEntity')

const userRepository = {
  all: () => model().find().populate('petsIds')
}

module.exports = userRepository