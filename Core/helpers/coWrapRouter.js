'use strict'

import co from 'co'

export default (action) => {
  return co.wrap(function* (req, res) {
    return yield action(req,res)
  })
}