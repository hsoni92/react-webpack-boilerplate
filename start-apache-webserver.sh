#!/usr/bin/env bash

# Source for fetching constants
source $PWD/docker-config.sh

printf "\n\n"
echo "Creating Container: $CONTAINER_NAME"
printf "\n\n"

# Docker check
if [ -x "$(command -v docker)" ]; then
    echo "Linux Dependency: docker is already installed"
else
    echo "---- Install docker"
    sudo apt-get install docker.io -y
    sudo groupadd docker
    sudo usermod -aG docker $USER
    newgrp docker
    sudo chmod 777 /var/run/docker.sock
fi

# Delete Existing container if any
if [ "$(docker ps -q -a -f name=$CONTAINER_NAME)" ]
  then
    echo "Container: $CONTAINER_NAME found. Destroying."
    docker stop $CONTAINER_NAME
    docker rm $CONTAINER_NAME
  else
    echo "Container: $CONTAINER_NAME does not exist. Skip Destroy."
fi

# Deploy Container
if [ ! -z $(docker images -q $IMAGE_NAME) ]
then
  echo "Docker Image: $IMAGE_NAME already present. Skip Install."
else
  echo "Docker Image: $IMAGE_NAME NOT present. Installing:"
  sudo docker pull $IMAGE_NAME
fi
sudo docker run --name=$CONTAINER_NAME -v $PWD/$LOCAL_BUILD_DIR:/app -p $APACHE_PORT:80 -t -d $IMAGE_NAME
echo "Wait for Container services to start:"
sleep 5
while [[ ! "$(docker logs $CONTAINER_NAME)" =~ .*"apache2 entered RUNNING state".* ]]
  do sleep 2
done
echo "Docker Services have started."
printf "\n\n"
echo "Container Name: $CONTAINER_NAME"
echo "Apache Server URL: http://localhost:$APACHE_PORT"
printf "\n\n"