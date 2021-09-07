# Grayce-Shoppa

Grayce-Shoppa is a RESTful E-commerce website . This web app, uses Express to handle HTTP requests and Sequelize to interface with the database. React, Redux and React-Redux libraries are used on the front-end. All important state (i.e. cartItems and orders) are managed by the Redux store. Side-effects (like AJAX requests), are encapsulate in thunks.
Authentication and Authorization are provided using JWT and Bycrpt libraries

## Set-Up

- `npm install`
- Create a postgres database named Grayce-Shoppa on your local machine.

See setting up postgres on local machine: https://www.prisma.io/dataguide/postgresql/setting-up-a-local-postgresql-database

## Start

- Sync and seed the database by running `npm run seed`.
- Run `npm run start:dev`
- start:dev will both start your server and build your client side files using webpack
- start:dev:seed will start your server and also seed your database

### Heroku

https://grayce-shoppa.herokuapp.com/
