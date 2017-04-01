'use strict'

const signInSuccess = (data) => {
  console.log(data)
}

const signInFailure = (error) => {
  console.error(error)
}

module.exports = {
  signInFailure,
  signInSuccess
}
