# docker build -t express-server .
# docker run --init --rm 
# docker run --name express-server --init --env DATA_PATH=/data/num.txt -p 3001:3001 --mount type=volume,src=incrementor-data,target=/data express
FROM node:12.10.0

WORKDIR /usr/app

COPY package*.json ./

RUN npm ci -qy

COPY . .

CMD ["node", "src/index.js"]