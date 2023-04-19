#!/usr/bin/env bash

set -x

COMMAND="/bin/bash"

. ./containthedocs-image

exec docker run --rm -it \
  -v "$PWD":"$PWD" -p 80:80 --workdir "$PWD" \
  ${DOCKER_RUN_ARGS} \
  -e "LOCAL_USER_ID=$(id -u)" \
  ${DOC_IMG} ${COMMAND}
