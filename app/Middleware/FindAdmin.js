'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class FindAdmin {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response, auth }, next) {
    // call next to advance the request



    await auth.check();

    if(auth.jwtPayload.data.type != 'admin'){
      return response.unauthorized({
        message: 'You are not authorized!!!'
      })
    }
    await next()
  }
}

module.exports = FindAdmin;
