# API REST with Node.js NestJS

## Description
### API REST of articles of an external application.

## Methodologies
### - Engine: `Node.js`
### - Framework: `NestJS` with `Typescript`
### - Dependencies: `NestJS dependencies` + `axios` (send requests to other web applications)

## How to install
### First you must have `Node.js`, `npm` and/or `yarn` installed in your machine (if you don't have yarn, use in your terminal `'npm install --global yarn'`)
### After cloning this repository, open the project folder in your terminal
### Type `'yarn'` or `'npm install'`. Automatically will install some dependencies that you need.
### To finish, install the NestJS globally using `'npm i -g @nestjs/cli'` and start the application with `'npm run start --watch'` or `'yarn start --watch'`. See the [docs](https://docs.nestjs.com/)

### If you want, you can use docker or docker-compose

### The API documentation is in http://localhost:3000/api

## API Routes
*The docs are in GET /api*

### GET / *'Chalenge name'*
### GET /api *'Documented API'*
### GET /articles *'Search for articles'* params: (`limit, page`)
### POST /articles *'Insert new article'*
### GET /articles/:id *'Search article by _id'*
### PUT /articles/:id *'Update articles by _id'*
### DELETE /articles/:id *'Delete article by _id'*

## This is a challange by [__Coodesh__](https://coodesh.com/)
