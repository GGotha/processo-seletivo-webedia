<h3 align="left">
    Português
</h3>

## :ballot_box_with_check: Para fazer

- TDD (jest) :heavy_check_mark:
- JWT (jsonwebtoken) :heavy_check_mark:
- Sistema de paginação :heavy_check_mark:

<h1 align="center">
    Como rodar a API
</h1>

## Requisitos

```
-Node - https://nodejs.org/en/
-Yarn ou npm - https://yarnpkg.com
-Inmsominia ou postman - https://insomnia.rest
-Docker - https://www.docker.com/
-Workbench SQL - https://www.heidisql.com/
-Terminal (cmd, cmder, hyper) - https://cmder.net/
```

## Passos

<h3>1º Passo - Clone o repositório</h3> - <h4>https://github.com/GGotha/processo-seletivo-webedia.git</h4>
<br>
<img src="./src/assets/readme/clone.png" alt="clone">

<h3>2º Passo - Rode o comando no docker</h3> - <h4>docker run --name webedia -e MYSQL_ROOT_PASSWORD=root -e
    MYSQL_DATABASE=webedia -d -p 3306:3306 mysql:5.7.10</h4>
<br>
<img src="./src/assets/readme/docker.png" alt="docker">