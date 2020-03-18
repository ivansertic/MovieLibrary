const { hooks } = require('@adonisjs/ignitor')

hooks.after.providersRegistered(() => {
  // execute your code
  const Response = use('Adonis/Src/Response');

  Response.macro('userData',function (userEmail, userType,message) {
      return this.json({
        message: message,
        data:{
          "e-mail": userEmail,
          "type": userType
        }

      });
  })
})
