This time let's use some node modules
On the host create the dependencie list
npm init -y
npm install @hapi/hapi hapi-pino

This will create package.json and node modules directory
We will copy these files from the host into the container
and build (install the dependencies)

➜ docker build -t hapi-server-example .
docker run -it --rm --init -p 3000:3000 hapi-server-example
