
# Test task for Uran
#####(https://urantest.herokuapp.com/)

JavaScript/Node.js Developer

Pre-middle/middle

To create landing-page using Node.js + Express OR Koa.
Do not complicate the solution with higher-level frameworks. Landing page
means that for the displaying on the client part you should use a template
(nephritis, pug ... ...)
Requirements:
1) Use MongoDB as a database.
2) All landing content must be kept in the database.
3) To implement two languages for the content (language variants, for
example ru/en), using middleware.
4) To use ODM (mongoose, ...).
5) To divide the configs of the project on staging/production.
6) Readme describe what should be done to start (commands, etc), add
dump of your data and describe how to deploy.
7) Use only stable versions of Node.js, MongoDB, and third-party packages.

P.S. You are not limited in the choice of tools and structure both database
and the project, but give reasons for your choice.
Landing design is at your discretion.

## Requirements

* [NodeJs](http://nodejs.org) >= 6.x 
* [mongodb](http://mongodb.org)

## Install

```sh
$ git clone git://github.com/EvgenSalyakin/UranTest.git
$ npm install
```

**NOTE:** If you want to restore demo-dump for DB then

```sh
$ mongorestore
```

then

```sh
$ npm start
```

Then visit [http://localhost:3000/](http://localhost:3000/)

<!---
## Tests

```sh
$ npm test
```
--->

## License

MIT
