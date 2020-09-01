
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <img src="docs/logo.png" alt="Logo" width="80" height="80">
  <h3 align="center">https-server-nodejs</h3>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Installation](#installation)



<!-- ABOUT THE PROJECT -->
## About The Project

Neste projecto crio um servidor https no localhost

### Built With

* [Javascript](https://nodejs.org/)
* [NodeJS](https://nodejs.org/)
* [Express](https://nodejs.org/)


<!-- GETTING STARTED -->
## Getting Started


### Installation

1. Clone the repo
```sh
git clone https://github.com/AdilsonFuxe/https-server-nodejs.git
```

Entre dentro da pasta https-server-nodejs
```sh
  cd https-server-nodejs
```
rode o seguinte comando para instalar todas as dependencias do projecto 

```sh
  npm install
```
ou
```sh
  yarn install
```

entre dentro da pasta `src/server/ssl`
```sh
  cd src/server/ssl
```
de permissão de execução para o script `generate-certificate.sh`
```sh
  chmod +x generate-certificate.sh
```
execute o script para gerar o sertificado ssl

```sh
  ./generate-certificate.sh
```
na raiz do projecto execute o seguinte comando para rodar o servidor

```sh
  npm run dev
```
ou
```sh
  yarn dev
```

o projecto vai rodar em `https://localhost:8080`