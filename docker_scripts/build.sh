#!/bin/bash

HOST_PROJECT_DIR=$(dirname $(dirname $(readlink -f $0)))
PROJECT_NAME=$(basename ${HOST_PROJECT_DIR})

echo "Stopping container using image if exists..."
docker container stop ${PROJECT_NAME}

printf "\nRemoving image if exists...\n"
docker image rm ${PROJECT_NAME}

printf "\nBuilding image...\n"
docker build -t ${PROJECT_NAME} ..

