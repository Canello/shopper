# Teste Shopper

## Para executar o app na sua máquina:

1. Garantir que você tem o Docker instalado e funcionando. Garantir que as portas 3000, 3001 e 3002 da sua máquina estão disponíveis.

2. Na pasta "back-end" criar um arquivo .env com as seguintes variáveis:

    ```
    PORT=3001
    DB_HOST=database
    DB_NAME=shopper
    DB_USER=root
    DB_PASSWORD=shopper123
    ```

3. Na pasta "database" criar um arquivo .env com as seguintes variáveis:

    ```
    MYSQL_DATABASE=shopper
    MYSQL_ROOT_PASSWORD=shopper123
    ```

4. Na pasta raíz do projeto (que contém o arquivo compose.yaml), executar:
    ```
    docker compose up
    ```
5. Aguardar alguns segundos para tudo inicializar. Quando aparecer o log "Listening on port 3001." provavelmente tudo vai estar pronto. O web app vai ficar disponível em http://localhost:3000/ (atenção: porta 3000).
