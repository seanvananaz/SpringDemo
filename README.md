<p align="center">
  <h1 align="center">Java - Spring Boot Framework Demo</h1>
  <h3 align="center">Simple (React JS) Todo App with Spring Boot as a restful API with MySql as db.</h3>
</p>

## Requirements
##### Server
* Java 8 or later version
* Maven / Gradle
* MySQL
##### Client
* npm

## Getting Started on Server
Prefered IDE Eclipse / IntelliJ it will automatically compile dependencies in maven and gradle when opening java project
1. Open project with your IDE 
2. Wait for the project to compile all the dependencies before running
3. build & Run project
4. Check in your browser by requesting in this url: `localhost:8080/todos`
5. Or use an app for API Testing e.g. Postman

## Setup your DB
In this demo I used PhpMyAdmin to setup database
1. Create new DB and name it `todo_db`
2. Create Table named `todo`

| Name         | Type                 | Extra               |
|--------------|----------------------|---------------------|
| id           | int                  | AUTO_INCREMENT      |
| title        | varchar              |                     |
| task_desc    | text                 |                     |
| is_done      | tinyint              |                     |
| created_at   | datetime             | current_timestamp() |
| updated_at   | datetime             |                     |

3. users are found in User Accounts tab to create your own or use the default super user
```
username: admin
password:
```

## Running Client Application
1. make sure Spring Boot server is running
2. go to `/client` and in your terminal `npm install` to install all the packages
3. start React App `npm start`

## Built With
* [React](https://reactjs.org) - A progressive JavaScript framework.
* [Spring Boot](https://spring.io/projects/spring-boot) - Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can "just run".
* [Java](https://www.java.com/en/) - a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.

