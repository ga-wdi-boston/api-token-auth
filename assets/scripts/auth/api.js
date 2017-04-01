'use strict'

const signUp = (data) =>
  new Promise(function (resolve, reject) {
    if (Math.random() > 0.5) {
      resolve('in signUp')
    } else {
      const error = new Error('Random')
      error.data = data
      reject(error)
    }
  })

module.exports = {
  signUp
}
