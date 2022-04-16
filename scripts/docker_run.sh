#!/bin/bash

# This script should be in ./scripts/ where '.' is the projects root folder.
# This script uses the projects root folder name for both the image used, and the container created.

HOST_PROJECT_DIR=$(dirname $(dirname $(readlink -f $0)))
PROJECT_NAME=$(basename ${HOST_PROJECT_DIR})

IMAGE_NAME=${PROJECT_NAME}
CONTAINER_NAME=${PROJECT_NAME}

echo "Running container ${CONTAINER_NAME}..."
docker run -d --rm --pull=never \
    --name ${CONTAINER_NAME} \
    --hostname container \
    --mount type=bind,source="${HOST_PROJECT_DIR}",target="${HOME}/${PROJECT_NAME}" \
    --workdir "${HOME}/${PROJECT_NAME}" \
    -p 3000:3000 \
    ${IMAGE_NAME}

