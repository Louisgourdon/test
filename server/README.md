# Server

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

## Run server

Run `node index.js` for run the server.

## Running tests

Navigate to test/CountOfMoney_API and then run `bru run` This command will run all the requests in your collection.

### You can also run a single request by specifying its filename:

`bru run test_api.bru`

### Or run all requests in a folder:

`bru run folder_name`

### If you need to use an environment, you can specify it with the `--env` option:

`bru run folder --env "Com Env"`

### Pass Environment variables to your collection using the `--env-var` option:

`bru run folder --env Local --env-var JWT_TOKEN=1234`

### If you need to collect the results of your API tests, you can specify the `--output` option:

`bru run folder --output results.json`
