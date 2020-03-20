'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with movies
 */


const Movie = use('App/Models/Movie');
const Database = use ('Database');

class MovieController {
  /**
   * Show a list of all movies.
   * GET movies
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }



  /**
   * Create/save a new movie.
   * POST movies
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response}) {
    const {title,genre,description,length_in_minutes} = request.post();

        const movie = await Movie.create({title,genre,description,length_in_minutes})
        return response.status(201).json({
          "movie": movie
        })


  }

  /**
   * Display a single movie.
   * GET movies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params:{id}, request, response, view }) {
    return await Database.select().from('movies').where('id', id);

  }
  /**
   * Update movie details.
   * PUT or PATCH movies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params:{id}, request, response }){
    const {title, genre, description, length_in_minutes} =await request.post();

    await Database.table('movies').where('id',id)
      .update({title:title,genre:genre,description:description,length_in_minutes:length_in_minutes});
  }

  /**
   * Delete a movie with id.
   * DELETE movies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params:{id}, request, response }) {
    await Database.table('movies').where('id',id).delete();
  }

  async showUserMovies({request, response}){

    const user = request.user;
    console.log(user.id);
    const movies = await Movie.query().whereHas('users',
      usersQuery =>{
          usersQuery.wherePivot('user_id', user.id)
      }).fetch();

    response.status(200).json({
      data: movies
    })
  }
}

module.exports = MovieController
