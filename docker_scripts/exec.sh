#!/bin/bash

HOST_PROJECT_DIR=$(dirname $(dirname $(readlink -f $0)))
PROJECT_NAME=$(basename ${HOST_PROJECT_DIR})

echo "Starting bash shell inside container..."
docker exec -it ${PROJECT_NAME} bash

