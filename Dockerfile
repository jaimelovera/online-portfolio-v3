FROM node:17.9.0

# Set these to match host user.
ENV USER=jaime
ARG USER_UID=1000
ARG USER_GID=$USER_UID

USER root
RUN userdel -r node

RUN groupadd --gid $USER_GID $USER \
    && useradd --uid $USER_UID --gid $USER_GID -m $USER

ENV ENTRYPOINT="/home/$USER/.docker_entrypoint.sh"
COPY ./scripts/docker_entrypoint.sh $ENTRYPOINT
RUN chmod +x $ENTRYPOINT 

USER $USER

ENTRYPOINT ["/bin/bash", "-c",  "$ENTRYPOINT"]

