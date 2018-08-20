'use strict'

import repository from '#/Core/Repositories/userRepository'

const userController = {
  index: () => function *(req, res) {
    let users = yield repository.all()
    return res.json(users)
  }
}

export default userController