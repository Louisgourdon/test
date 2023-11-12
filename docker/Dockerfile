FROM elixir:latest

# Installer Hex et Phoenix

RUN mix local.hex --force && \
    mix local.rebar --force && \
    mix archive.install hex phx_new 1.6.0 --force

WORKDIR /app

RUN apt update 
RUN apt-get install -y inotify-tools

COPY ./entrypoint.sh /usr/entrypoint/

CMD ["sh", "/usr/entrypoint/entrypoint.sh"]
