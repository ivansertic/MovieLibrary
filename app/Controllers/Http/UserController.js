'use strict'


class UserController {

  async show({request,response}){

    const user = request.post().user;
    response.json({
      message: "Here is your data",
      "email": user.email,
      "User type": user.type
    })
  }

  async update({request, response}){

    const {email,password, user} = await request.post();


    user.email = email;
    user.password = password;

    await user.save();

    return response.json.status(200)({
      message: 'Successfully update your info'
    });


  }

  async delete({response, request}){
    const user = request.post().user;

    await user.delete();

    return response.json.status(200)({
      message: 'Sorry to se you go'
    });
  }
}

module.exports = UserController;
