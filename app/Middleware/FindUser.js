'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class FindUser {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle (ctx, next) {
    // call next to advance the request
    const {request, response,auth} = ctx;
    if(!await auth.check()){
      return response.json({
        message: 'Unknown user or missing token'
      })
    }

    const user = await  auth.getUser();

    //console.log(user);
    ctx.request.user = user;
    await next()
  }
}

module.exports = FindUser
