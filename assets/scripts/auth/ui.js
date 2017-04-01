'use strict'
// remove signIn and signOut
const store = require('../store.js')

// remove me before code-along
const signInSuccess = (data) => {
  store.user = data.user
  console.log(store)
}

// remove me before code-along
const signOutSuccess = () => {
  store.user = null
  console.log(store)
}

const changePasswordSuccess = () => {
  console.log('Password Successfully Changed.')
}

const success = (data) => {
  console.log(data)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess
}
