#!/usr/bin/env bash

# Source for fetching constants
source $PWD/docker-config.sh

# Delete Existing container if any
if [ "$(docker ps -q -a -f name=$CONTAINER_NAME)" ]
  then
    echo "Container: $CONTAINER_NAME found. Deploying build."
    npm run build
    cp public/.htaccess build/
    docker restart $CONTAINER_NAME
    printf "\n\n"
    echo "Container Name: $CONTAINER_NAME"
    echo "Build Deployed. Apache URL: http://localhost:$APACHE_PORT"
  else
    echo "Container: $CONTAINER_NAME does not exist."
    echo "Run:$ ./start-apache-webserver.sh to start an apache webserver for /build"
fi