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
-Insomnia ou postman - https://insomnia.rest
-Docker - https://www.docker.com/
-Workbench SQL - https://www.heidisql.com/
-Terminal (cmd, cmder, hyper) - https://cmder.net/
```

## Passos

<h3>Clone o repositório</h3>
<h4>https://github.com/GGotha/processo-seletivo-webedia.git</h4>
<br>
<img src="./src/assets/readme/clone.png" alt="clone">

<h3>Instale os pacotes</h3>
<h4>Entre na pasta na qual você clonou, dê um yarn install para instalar todos os pacotes</h4>
<br>
<img src="./src/assets/readme/install.png" alt="clone">

<h3>Rode o comando no docker</h3>
<h4>docker run --name webedia -e MYSQL_ROOT_PASSWORD=root -e
    MYSQL_DATABASE=webedia -d -p 3306:3306 mysql:5.7.10</h4>
<br>
<img src="./src/assets/readme/docker.png" alt="docker">

<h3>Conecte no banco de dados</h3>
<h4>Tipo de rede: MYSQL, IP: localhost, Usuário: root e senha: root</h4>
<br>
<img src="./src/assets/readme/db.png" alt="docker">

<h3>Abra o Insomnia</h3>
<h4>Tipos de rotas existentes:</h4>
<!-- ```
/users/ (POST)
/ (POST)
/artigo/all?page=0 (GET)
/artigo/id/:id (GET)
/artigo/:id (DELETE)
/artigo/permalink/:permalink (GET)
/artigo (POST)
``` -->
```
/users/ (POST)
/ (POST)
/artigo/all?page=0 (GET)
/artigo/id/:id (GET)
/artigo/:id (DELETE)
/artigo/permalink/:permalink (GET)
/artigo (POST)
```
<br>