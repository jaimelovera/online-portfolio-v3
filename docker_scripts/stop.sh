#!/bin/bash

HOST_PROJECT_DIR=$(dirname $(dirname $(readlink -f $0)))
PROJECT_NAME=$(basename ${HOST_PROJECT_DIR})

echo "Stopping container if exists..."
docker container stop ${PROJECT_NAME}

