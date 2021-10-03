➜ npx create-react-app my-react-app
This creates package -json git

docker build -t react-frontend .
docker run --rm --init -it -p 3000:3000 react-frontend

docker run -p 3000:3000 --rm --init -it --mount type=bind,src=$(pwd)/src,target=/usr/app/src react-frontend
