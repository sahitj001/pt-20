# My server

Welcome on my readme. This application consists out of a login/register, profile and edit-profile page. This web app is supposed to become a dating app in the future.

## Job Story

My Job story is: As a user I would like to be able to tell something about myself so that more people can get to know me. To satisfy this Job Story I have made a login/register/profile page. To be able to have a profile you should be able to make a an account, so that's why I made a register page. You can then log in into your account and edit it so more people will get to know you.

## Getting started

First you will have to clone my repo:

```
git clone https://github.com/sahitj001/be-20.git
```

Install my server by doing:

```
npm install
```

You can run the server by using the following command:

```
npm test
```

## Built with

### Web application Framework
Installed web application framework: [Express](https://www.npmjs.com/package/express).

### Templating engine
I use the following templating engine: [ejs](https://www.npmjs.com/package/ejs).

### Database
I use mongoDB as database. I use [Mongoose](https://www.npmjs.com/package/mongoose) to connect with my online database on [MongoDB](https://account.mongodb.com/account/login).
My database uses JSON.

![Database structure](https://i.imgur.com/1ZaGOdP.png)

### Authentication
Used [Passport](https://www.npmjs.com/package/passport) together with [Passport-local](http://www.passportjs.org/packages/passport-local/). I also work with [express-sessions](https://www.npmjs.com/package/express-session).

### Security
[bcrypt](https://www.npmjs.com/package/passport) to hash and salt passwords.
[dotenv](https://www.npmjs.com/package/https://www.npmjs.com/package/dotenv) to store configuration separate from cod.

### Uploading files
[Multer](https://www.npmjs.com/package/multer) to upload files.

## Authors

- Jordy 

## License

This project is licensed under the MIT License
