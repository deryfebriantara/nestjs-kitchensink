# Nestjs Kitchensink
nestjs Kitchensink is a nestjs starter project,  probably will make you save one hour coding to start a project.

## Installation

make sure you have nestjs installed on your local machine [nest doc](https://docs.nestjs.com/first-steps) to install nestjs.

```bash
$ npm i -g @nestjs/cli
$ git clone git@github.com:deryfebriantara/nestjs-kitchensink.git
$ cd nestjs-kitchensink
$ touch .env 
$ yarn install
```

## Usage
edit `.env` file with following code, this project using `mysql by default` if you want changing database type the configuration in `src/shared/services/database-connection.service.ts`
```python
DATABASE_HOST = "localhost"
DATABASE_PORT = 3306
DATABASE_USER = "root"
DATABASE_PASSWORD = "your_pass"
DATABASE_DB = "your_db"

```
and you are ready to go
```bash

$ yarn start:dev

```
open `localhost:3000/api/docs`
## Feature
- `nestjsx/crud` [documentation](https://github.com/nestjsx/crud)
- authentication with `passport and jwt strategy`  [documentation](https://docs.nestjs.com/techniques/authentication)
- OpenApi `nestjs/swagger`[documentation](https://docs.nestjs.com/recipes/swagger)
- example todo CRUD operation using `nestjsx/crud`
- `TypeOrm` [documentation](https://docs.nestjs.com/recipes/sql-typeorm)
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

It will be nice to help write a test for this project.

## License
[MIT](https://choosealicense.com/licenses/mit/)
