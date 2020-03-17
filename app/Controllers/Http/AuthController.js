'use strict'

const User = use('App/Models/User');

class AuthController {
  async register({request,auth,response}){
    const {email, password, type} = request.post();

    const user = await User.create({email,password,type});

    const accessToken = await auth.generate(user,true);

    return response.status(201).json({
      "user":user,
      "access_token": accessToken
    })
  }

  async login({request, auth, response}){
    const {email, password} = request.post();

    try{

        const user = await User.findBy('email',email);
        const accessToken = await auth.generate(user,true);
        return response.status(200).json({
          "user": user,
          "access_token": accessToken
        })

    } catch(e){
      return response.status(400).json({
        message:"Unknown email or password"
      })
    }
  }
}

module.exports = AuthController
