'use strict'

const User = use('App/Models/User');

class AuthController {
  async register({request,auth,response}) {
    const {email, password, type} = request.post();

    const user = await User.create({email, password, type});

    const accessToken = await auth.generate(user, true);



    return response.created({
      "email": user.email,
      "type": user.type,
      "token": accessToken
    });
  }

  async login({request, auth, response}){
    const {email, password} = request.post();

    try{
        const user = await User.findBy('email',email);

        let payloadType = {type: user.type};
        const accessToken = await auth.attempt(email,password, payloadType);


        return response.ok({
          "user": user,
          "access_token": accessToken
        });

    } catch(e){
      return response.notFound({
        message:"Unknown email or password"
      })
    }
  }
}

module.exports = AuthController
