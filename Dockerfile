FROM node:17.9.0

ENV USER=jaime
ARG USER_UID=1000
ARG USER_GID=1000

USER root
RUN userdel -r node

RUN groupadd --gid $USER_GID $USER \
    && useradd --uid $USER_UID --gid $USER_GID -m $USER

USER $USER

CMD tail -f /dev/null
