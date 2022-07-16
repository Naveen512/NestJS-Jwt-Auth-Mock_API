## NestJS Mock API To generate JWT Authentication Token & Refresh Token

## Step 1
Install NestJS(which is node application) CLI into the local machine

```bash
$ npm i -g @nestjs/cli

```

## Step 2
In project root folder install all packages

```bash
$ npm install
```

## step 3
Run application

```bash
$ npm run start:dev
```

## Login endpoint
```bash
http://localhost:3000/auth/login

# payload

{
  "username": "test",
  "password":"1234"
}

# API response
{
"access_token":"",
"refresh_token":""
}

For testing purpose to expire the Jwt token we can set the expiration at
# src/auth/aut.module.ts
`JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1800s' },
})`

you can change value at 'expiresIn', default set {1800 seconds}--> 30mins

```

## Refresh token endpoint
```bash
http://localhost:3000/auth/refreshtoken

# payload

{
"access_token":"",
"refresh_token":""
}

#API Resonse
{
"access_token":"",
"refresh_token":""
}

```

## Secured API's
```bash

#API to consume with a valid token as its header
http://localhost:3000/user/fav-movies

#API Response
[
  {
    id:'',
    name:'',
    genre:''
  }
]

```


## Stay in touch

- Author - Naveen Bommidi
- Website - [Blog](https://learmoreseekmore.com/)
- Youtube  - [Naveen Bommidi Tech Seeker](https://www.youtube.com/c/NaveenTechSeeker)

