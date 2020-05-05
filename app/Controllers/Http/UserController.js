'use strict'

const Database = use ('Database');

class UserController {

  async show({request,response}){

    const user = request.user;
    response.userData(user.email, user.type, "Here is your data");
  }

  async update({request,response}){

    const {email,password} = await request.post();


    request.user.email = email;
    request.user.password = password;

    await request.user.save();

    return response.ok({
      message: 'Successfully update your info'
    });


  }

  async delete({response, request}){
    const user = request.user;

    await user.delete();

    return response.found({
      message: 'Sorry to se you go'
    });
  }

  async index ({response, request}){
    return await Database
      .select('*')
      .from('movies');
  }

  async addMovie({request}){
    const user = request.user;

    const {movies} = request.post();

    if(movies && movies.length > 0){
      await user.movies().detach();
      await user.movies().attach(movies);
    }
  }

}



module.exports = UserController;
