The app is a demo project based on Laravel, React and MySQL, all are wrapped up in Docker containers.

This is a proof of concept (PoC) and it is supposed to demonstrate some PHP full stack knowledge. The dockerization is not  strongly optimized, including security hardening, we pretty know it. This is just a PoC that _works_...

## Prerequisites

 - Docker engine v18.x
 - docker-compose v3.x

## Install

1. git clone [git@github.com:celldweller24/testAssigment.git](https://github.com/celldweller24/testAssigment) && cd testAssigment
1. docker-compose up -d
1. http://localhost:8080

Allow some time to build the app before pointing a browser at http://localhost:8080 . If you want exactly know that it is ready please look at the message _"Laravel development server started"_ from the testAssignment_app container logs: 

```
$docker logs testAssignment_app

Laravel development server started: <http://0.0.0.0:80>
[Thu Mar 12 13:49:08 2020] PHP 7.4.3 Development Server (http://0.0.0.0:80) started
```

## Configuration

The configuration is mainly set via environment vars in [docker-compose.yml](docker-compose.yml) file. Whenever changes are made outside the environment please rebuild with:

```
$docker-compose up -d --build
```


## Troubleshooting

Verify with `docker-compose ps` that both app and database containers are up and running: 

```
$docker-compose ps

        Name                      Command               State          Ports
------------------------------------------------------------------------------------
testAssignment_app     docker-php-entrypoint ./wa ...   Up      0.0.0.0:8080->80/tcp
testAssignment_mysql   docker-entrypoint.sh mysqld      Up      3306/tcp, 33060/tcp
```

In case of failure first refer to container logs for errors:

```
$docker logs testAssignment_app
```

```
$docker logs testAssignment_mysql
```
