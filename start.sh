#!/bin/bash

git stash
git checkout step1

docker rm -f $(docker ps -aq)


echo "" > ./traefik/access.log
echo "" > ./traefik/acme.json
chmod 600 ./traefik/acme.json

cd ./env-demo/
./manage_acme_docker_environment.sh --dev

git stash
git checkout step1
