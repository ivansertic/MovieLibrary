'use strict'

class HasMovie {
  register (Model, customOptions = {}) {
    const defaultOptions = {}
    const options = Object.assign(defaultOptions, customOptions)

    Model.syncMovies = function (UserModel, movies) {
      if(movies && movies.length > 0){
        UserModel.movies().detach();
        UserModel.movies().attach(movies);
      }
    }
  }
}

module.exports = HasMovie
