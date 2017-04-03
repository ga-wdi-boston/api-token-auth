'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (response) => {
  console.log('signIn success ran. data is :', response)
  store.user = response.user
}

const signInFailure = (error) => {
  console.log('signIn failure ran. error is :', error)
}

const signOutSuccess = () => {
  console.log('signOut success ran. and nothing was returned')
  store.user = null
}

const signOutFailure = (error) => {
  console.log('signOut failure ran. error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
}
