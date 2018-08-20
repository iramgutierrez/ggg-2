'use strict'

import repository from '#/Core/Repositories/petRepository'

const petController = {
  index: () => function *(req, res) {
    let pets = yield repository.all()
    return res.json(pets)
  }
}

export default petController