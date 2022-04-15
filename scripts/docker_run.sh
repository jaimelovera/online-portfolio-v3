#!/bin/bash

# These are set automatically.
HOST_PROJECT_DIR=$(dirname $(dirname $(readlink -f $0)))
PROJECT_NAME=$(basename ${HOST_PROJECT_DIR})

# Change if different.
IMAGE_NAME=${PROJECT_NAME}
CONTAINER_NAME=${PROJECT_NAME}

echo "Running container..."
docker run -d --rm --pull=never \
--name ${CONTAINER_NAME} \
--hostname container \
--user $(id -u):$(id -g) \
--mount type=bind,source="/etc/group",target="/etc/group" \
--mount type=bind,source="/etc/passwd",target="/etc/passwd" \
--mount type=bind,source="/etc/shadow",target="/etc/shadow" \
--mount type=bind,source="${HOST_PROJECT_DIR}",target="${HOME}/${PROJECT_NAME}" \
--mount type=bind,source="${HOME}/.bashrc",target="${HOME}/.bashrc" \
--mount type=bind,source="${HOME}/.bash_aliases",target="${HOME}/.bash_aliases" \
--workdir "${HOME}/${PROJECT_NAME}" \
-p 3000:3000 \
${IMAGE_NAME}

if [ $? -eq 0 ]; then
    docker exec --user root ${CONTAINER_NAME} bash -c "chown ${USER}:${USER} ${HOME}"
fi

