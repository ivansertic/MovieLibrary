'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MovieSchema extends Schema {
  up () {
    this.create('movies', (table) => {
      table.increments()
      table.string('title')
      table.string('genre')
      table.string('description')
      table.integer('length_in_minutes').unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('movies')
  }
}

module.exports = MovieSchema
