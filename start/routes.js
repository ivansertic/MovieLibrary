'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.post('/register', 'AuthController.register');
Route.post('/login', 'AuthController.login');

Route.patch('/user', 'UserController.update').middleware(['auth','findUser']);
Route.delete('/user', 'UserController.delete').middleware(['auth','findUser']);
Route.get('/user', 'UserController.show').middleware(['auth','findUser']);

Route.post('/movies','MovieController.store').middleware(['auth','findAdmin']);
