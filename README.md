** Front

~ cd client
~ docker build -t money_client .
~ docker run -p 8080:80 money_client


le front se lance sur le port 4200
(enlever le -d pour voir les logs du démarrage)

** Backend 

~ cd server \
~ docker build -t money_server . \
~ docker run -dp 127.0.0.0:3000:3000 money_server

le back se lance sur le port 3000