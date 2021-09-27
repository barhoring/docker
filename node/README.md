Let's create a simple container server.
Starting point is a debian machine with node and npm already installed

docker build -t alpine-server-example .
docker run --rm --init -it -p 3000:3000 alpine-server-example
