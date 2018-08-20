'use strict'

const { waterline } = require('./init')
const userRepository = require('./Core/Repositories/userRepository')


let init = async () => {
  await waterline()

  let users = await userRepository.all()
  console.log(users)
}

init().catch(console.error)