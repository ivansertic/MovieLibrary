'use strict'

const User = use('App/Models/User')

class AuthController {
  async register({request,auth,response}){
    const {email, password, type} = request.post()

    const user = await User.create({email,password,type})

    const accessToken = await auth.generate(user,true)

    return response.json.status(201)({
      "user":user,
      "access_token": accessToken
    })
  }

  async login({request, auth, response}){
    const {email, password} = request.post()

    try{

        const user = await User.findBy('email',email);
        const accessToken = await auth.generate(user,true);
        return response.json.status(200)({
          "user": user,
          "access_token": accessToken
        })

    } catch(e){
      return response.json.status(400)({
        message:"Unknown email or password"
      })
    }
  }
}

module.exports = AuthController
