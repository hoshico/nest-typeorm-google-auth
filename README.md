# Hoshico's Nest.js Template
![Group 28](https://github.com/hoshico/nest-typeorm-google-auth/assets/77495217/37c55843-bd9e-4927-95c0-00d5f2fa2b8d)


## Description
Using TypeORM version 3 for ORM, this template is implemented to perform Google authentication for all resources.

## Main libraries

|Name|Version|
|----|-------|
|TypeORM|0.3.20|
|Google Auth Library|9.9.20|
|Class Validator|9.9.20|
|uuid|9.0.1|

## Authentication and Authorization
The description regarding authentication is written in middleware > auth.middleware.ts. When a request is made to the API, authentication is first performed here using the id_token issued by Google's auth server.

## API
