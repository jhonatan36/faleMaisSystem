# faleMaisSystem
Sistema FaleMais para calcular valor do consumo em ligações

## Especificações

é necessário ter instalado:

* node 20+ com yarn instalado
* composer (ultima versão de preferencia)
* php 8.1+

estou usando React + vite no front e Laravel 10 + sanctun no back.

### BACK
____
Foi utilizado Laravel 11 para criação da API

### Instruções para configurar uso do back

1- primeiro ponto é acessar a pasta back do projeto e dentro dela rodar o `composer install`

2- após a instalação finalizar é necessário configurar o .env do projeto, foco principal para as configurações do banco

* o projeto esta configurado para utilizar mysql

>DB_CONNECTION=mysql

>DB_HOST=127.0.0.1

>DB_PORT=3306

>DB_DATABASE=back

>DB_USERNAME=root

>DB_PASSWORD=

* preencha utilizando suas credenciais de banco

3- o nome configurado no DB_DATABASE deve ser um banco já criado na base de dados para o laravel reconhecer

* utilizar caracteres `utf8mb4` e collation `utf8mb4_0900_ai_ci`

4- ainda dentro da pasta do back utilize o comando `php artisan migrate --seed`

* o comando vai criar as duas tabelas utilizadas no projeto e popular com alguns dados exatamente como demonstrado no exemplo do teste

5- caso queira usar o proprio servidor do laravel para rodar a api use `php artisan serve`

* este comando vai inabilitar o uso temporário do terminal, utilize outros para prosseguir

6- foi utilizando sanctun para gerenciar o acesso a api, para facilitar foram criadas rotas para criar o usuário e receber o token de acesso.

* no projeto segue um arquivo do insominia com todas as rotas mapeadas

6.1 - utilize a rota chamada `register` para cadastrar o usuário que utilizará a api. Já tem dados padrões no body da rota, mas podem ser alterados caso queiram.

6.2 - ao criar o usuário no proprio retorno terá uma coluna `token` com o hash utilizado nas requests da api. Copie este código, pois o mesmo será utilizado no auth das requests do insominia e também na configuração do front

7- foi criado todo o crud de administração dos destinos e planos caso queiram testar. Este ponto não faz parte do projeto.

### FRONT
____
No front foi utilizado React + vite

### Instruções para configurar o front

1- primeiro passo de configuração do front é rodar o comando `yarn` ou `yarn install`

2- agora precisaremos configurar o .env.local do projeto
* o env do projeto pode ser copiado do .env.example e renomeado para .env.local
* neste env contem apenas duas variaveis

> VITE_API_BASE_URL=http://localhost:8000/api
> VITE_API_KEY=""

* o base_url é padrão se a portal estiver disponível, caso seja modificada, deve ser alterado aqui também.
* o api_key é o token que foi criado no passo anterior do back

3- para rodar o projeto do front e conseguir realizar a pesquisa é só rodar o comando `yarn dev`
* por padrão o projeto roda na na url `http://localhost:5173`, podendo ser alterada caso a porta esteja ocupada ou por configuração.

4- só consultar e testar

___
ps.: Algumas validações foram deixadas como melhorias para acelerar o desenvolvimento.