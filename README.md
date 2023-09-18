# Teste Shopper

## Para executar o app na sua máquina:

1. Na pasta "back-end" criar um arquivo .env com as seguintes variáveis:

    ```
    PORT=3001
    DB_HOST=database
    DB_NAME=shopper
    DB_USER=root
    DB_PASSWORD=shopper123
    ```

2. Na pasta "database" criar um arquivo .env com as seguintes variáveis:

    ```
    MYSQL_DATABASE=shopper
    MYSQL_ROOT_PASSWORD=shopper123
    ```

3. Garantir que as portas 3000, 3001 e 3002 da sua máquina estão disponíveis.

4. Na pasta raíz do projeto (pasta mãe das pastas front-end, back-end e database), executar:
    ```
    docker compose up
    ```
5. Aguardar alguns segundos para os containeres inicializarem. O app vai estar disponível em http://localhost:3000/.
