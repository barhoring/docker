docker build -t express-server .

docker run -it --rm --init -p 3001:3001 --mount type=volume,src=incrementor-data,target=/data express-server

--mount type=bind,src=$(pwd)/index.js,target=/usr/app
--mount type=bind,src=$(pwd)/helpers.js,target=/usr/app

docker run -it --rm --init -p 3001:3001 --mount type=bind,src=$(pwd)/src,target=/usr/app/src express-server

       -v /on/my/host/2:/on/the/container/2 \
