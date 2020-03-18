'use strict'


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

    return response.status(200).json({
      message: 'Successfully update your info'
    });


  }

  async delete({response, request}){
    const user = request.user;

    await user.delete();

    return response.status(200).json({
      message: 'Sorry to se you go'
    });
  }
}

module.exports = UserController;
