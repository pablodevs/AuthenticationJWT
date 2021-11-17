# Autentification using JWT & FLASK

## Implemented endpoints:
--> routes.py
  - /api/token, methods: 'POST': To create a token or log in on ...frontURL/login
  - /api/user, methods: 'GET': To get current user information and display it on ...frontURL/profile

--> app.py
  - /user, methods: 'GET' & 'POST': To get all users or create (POST) a new user on ...frontURL/register
  - /user/<int:user_id>, methods: 'PUT', 'GET', 'DELETE': to modify, get or delete a single user by its id

### Back-End Manual Installation:

It is recomended to install the backend first, make sure you have Python 3.8, Pipenv and a database engine (Posgress recomended)

1. Install the python packages: `$ pipenv install`
2. Create a .env file based on the .env.example: `$ cp .env.example .env`
3. Install your database engine and create your database, depending on your database you have to create a DATABASE_URL variable with one of the possible values, make sure yo replace the valudes with your database information:
4. Migrate the migrations: `$ pipenv run migrate` (skip if you have not made changes to the models on the `./src/api/models.py`)
5. Run the migrations: `$ pipenv run upgrade`
6. Run the application: `$ pipenv run start`

### Front-End Manual Installation:

- Make sure you are using node version 14+ and that you have already successfully installed and runned the backend.

1. Install the packages: `$ npm install`
2. Start coding! start the webpack dev server `$ npm run start`

If having this problem: `npm ERR!` during running `$ npm install` try:
1. `$ brew install node@14`
2. `$ brew unlink node`
3. `$ brew link node@14`
4. `$ npm install`
5. `$ npm run start`
