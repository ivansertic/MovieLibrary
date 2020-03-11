'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MovieUserSchema extends Schema {
  up () {
    this.create('movie_user', (table) => {
      table.integer('movie_id').unsigned().index()
      table.integer('user_id').unsigned().index()
      table.foreign('movie_id').references('movies.id').onDelete('cascade')
      table.foreign('user_id').references('users.id').onDelete('cascade')
    })
  }

  down () {
    this.drop('movie_users')
  }
}

module.exports = MovieUserSchema
