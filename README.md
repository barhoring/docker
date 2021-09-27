TLDR:
I have a tech-talk. Bring your own laptop. Make sure to install these _before the lecture_

- VScode (please do, trust me. you can always uninstall it later) - - - run this on terminmal. :
- run this in terminal to download the
  `docker pull ubuntu:bionic docker pull node:12-stretch docker pull node:12-alpine docker pull nginx:1.17 docker pull mongo:3 docker pull jturpin/hollywood`

Please download VScode before the lecture, we will see some very cool docker extensions and features of VScode 👌
This will help us inspect and debug the containers we’ll be building

DOCKER - what is that ? - simple dockerfile example - the build ->

Get our hands dirty - running an express app

! IMPORTANT !
please install before

Alternatives
JUMP INTO THE WATER as this should take some time
docker run -it jturpin/hollywood hollywood

let's start:
`docker run -it alpine:3.12`
This runs docker in interactive mode

containers exit once they are done, this keep the conection
`docker run alpine:3.12 whoami`

run `exit`
to exist the container

trick to kill all containers!
docker kill $(docker ps -q)

now we have node
docker run -it --name node-fun node:12-stretch

difference between execute and run

Node.js on Docker

`docker run -it node:12-stretch`

Tricks
cat /etc/issue
docker rm $(docker ps -aq)
