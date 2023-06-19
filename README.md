## Description
Backend - test (Elasticsearch integration)

swagger docs: localhost:3000/api

## Running the app

```bash
$ yarn 
$ yarn containers
$ yarn run start

```
## Test
Pending

## Frontend
Added

## Migration
Added - Need to re-run app and remove migration table from DB, Then re-run to seed film table. There is correct method is to create tables in a seperate migration and set `synchronize` to false in `ormconfig.ts` (not done as yet)

## Queries with Elastic Serach
Search for Name, Genre & Description is added, Comments and ranking not added. Also search inputs needs to be debounced.

## Comments
 I spent a day learning about Nest.js and Elastic Search, which are new domains for me. The current work-in-progress took up my entire day to reach this point. However, I still require more time to complete the task. I have already performed numerous frontend, migration, and testing tasks in the production environment, so that won't be an issue for me. However, learning Elasticsearch is a completely new topic for me and has a learning curve.

`yarn start:dev` in backed folder (root)
`yarn start` in front-end folder

Pending build and home page linking with the backend which would be login or home page.
