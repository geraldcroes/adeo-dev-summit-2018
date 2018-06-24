#!/bin/bash

git stash
git checkout step1

docker rm -f $(docker ps -aq)


echo "" > ./traefik/access.log
rm -rf acme
mkdir acme

cd ./env-demo/
./manage_acme_docker_environment.sh --dev

git stash
git checkout step1
