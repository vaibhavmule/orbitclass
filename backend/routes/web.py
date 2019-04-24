"""Web Routes."""

from masonite.routes import RouteGroup
from masonite.routes import Get, Post, Put

ROUTES = [
    RouteGroup([
        # Authentication
        Post('/users/login', 'AuthController@login'),

        # User
        Post('/users', 'UserController@create'),
        Get('/user', 'UserController@currunt_user'),
        Put('/user', 'UserController@update'),
    ], prefix='/api')
]
