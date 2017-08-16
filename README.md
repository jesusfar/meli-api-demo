# Node API demo based on DDD

This is a basic API demo for MELI, based on Domain Driven Design architecture and separation of concerns.

#### Folder structure

Focused on layered architecture and codebase scalability, it is separeted in three main folders: Application, Domain and Infrastructure.

#### Dependency injection

It uses Awilix in order to implement a container application for dependency injection.


## Quick start

Clone the repository
```bash
$ git clone https://github.com/jesusfar/meli-api-demo.git
```
Install the dependencies with yarn or npm
```bash
$ cd meli-api-demo
$ yarn install
```
Finally run the API service

```
$ yarn start
```

### Playing with the API

Search items by query:
```
$ curl --request GET \
  --url 'http://127.0.0.1:3000/api/items?q=Iphone'
```
Get item by ID:
```
$ curl --request GET \
  --url 'http://127.0.0.1:3000/api/items/MLA643793732'
```

[Meli API Demo Postman collection](https://documenter.getpostman.com/view/2523140/melidemo/6n7TBzF)

## Todos

- Database integration
- Unit and behavioral tests
- CLI integrations
- Logging
- Value objects
### References

[Domain Driven Design Community](http://dddcommunity.org//)

[JavaScript Domain Driven Design](http://shop.oreilly.com/product/9781784394325.do)

[Node API folder structure](https://github.com/talyssonoc/node-api-boilerplate/wiki/Folder-structure)
