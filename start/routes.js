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

Route.post('/register', 'AuthController.register').validator('RegisterUser');
Route.post('/login', 'AuthController.login').validator('LoginUser');

Route.patch('/user', 'UserController.update').middleware(['auth','findUser']);
Route.delete('/user', 'UserController.delete').middleware(['auth','findUser']);
Route.get('/user', 'UserController.show').middleware(['auth','findUser']);
Route.get('/user/index','UserController.index').middleware(['auth','findUser']);
Route.get('user/myMovies','MovieController.showUserMovies').middleware(['auth','findUser']);
Route.patch('/user/index', 'UserController.addMovie').middleware(['auth','findUser']);


Route.post('/movies','MovieController.store').middleware(['auth','findAdmin']);
Route.patch('/movies/:id', 'MovieController.update').middleware(['auth', 'findAdmin']);
Route.get('/movies/:id', 'MovieController.show').middleware(['auth','findAdmin']);
Route.delete('/movies/:id','MovieController.destroy').middleware(['auth','findAdmin']);
