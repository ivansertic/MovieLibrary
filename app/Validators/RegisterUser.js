'use strict'

class RegisterUser {
  get rules () {
    return {
      email: 'required|email|unique:users',
      password: 'required',
      type:'required'
    }
  }
}

module.exports = RegisterUser
