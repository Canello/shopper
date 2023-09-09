# Teste Shopper

## Para executar o app na sua máquina:

1. Instalar o MySQL.
2. No MySQL, executar o script database.sql (da pasta raíz do projeto) para gerar o banco de dados e as tabelas. Pelo terminal:
    ```
    ~> cd [pasta raíz do projeto]
    ~> mysql -u [user mysql] -p
    ~> [senha mysql]
    ~> source database.sql
    ~> quit
    ```
3. Na pasta "back-end" criar um arquivo .env com as seguintes variáveis:
    ```
    PORT=3001
    DB_NAME=shopper_test_23942094
    DB_USER=[user mysql]
    DB_PASSWORD=[senha mysql]
    ```
4. Ir até a pasta raíz do projeto - que contém as pastas "back-end" e "front-end".
5. Executar `npm run build`.
6. Executar `npm start`.

### Versões utilizadas:

_Node.js 18.12.1_

_MySQL 8.0.34_
