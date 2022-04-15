#!/bin/bash

# NOTE: Script expects a image tagged with the project name.

HOST_PROJECT_DIR=$(dirname $(dirname $(readlink -f $0)))
PROJECT_NAME=$(basename ${HOST_PROJECT_DIR})

echo "Running container..."
docker run -d --rm --pull=never \
--name ${PROJECT_NAME} \
--hostname container \
--user $(id -u):$(id -g) \
--mount type=bind,source="/etc/group",target="/etc/group" \
--mount type=bind,source="/etc/passwd",target="/etc/passwd" \
--mount type=bind,source="/etc/shadow",target="/etc/shadow" \
--mount type=bind,source="${HOST_PROJECT_DIR}",target="${HOME}/${PROJECT_NAME}" \
--mount type=bind,source="${HOME}/.profile",target="${HOME}/.profile" \
--mount type=bind,source="${HOME}/.bashrc",target="${HOME}/.bashrc" \
--mount type=bind,source="${HOME}/.bash_aliases",target="${HOME}/.bash_aliases" \
--workdir "${HOME}/${PROJECT_NAME}" \
-p 3000:3000 \
${PROJECT_NAME}

if [ $? -eq 0 ]; then
    docker exec --user root ${PROJECT_NAME} /bin/bash -c "chown ${USER}:${USER} ${HOME}"
fi

