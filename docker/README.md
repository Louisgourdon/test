# TodoList

Pour lancer le docker (PREFERER LA VERSION EN DESSOUS): 

```bash
docker compose up -d --build 
```

Pour lancer le docker avec les logs du serveur : 

```bash
docker compose up -d --build && docker logs -f elixir
```

Pour rentrer dans le docker elixir pour executer TOUTES les commandes :
```bash
docker exec -it elixir bash
```

Pour rentrer dans le docker postgre : 
```bash 
docker exec -it postgres bash
```