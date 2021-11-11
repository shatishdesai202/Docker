## localhost === localhost:80

docker run -p 8080:8080 -d --rm --name todo-backend-container todo-backend-image
docker run -p 3000:3000 -d --rm --name todo-frontend-container todo-frontend-image
docker run -p 27017:27017 -d --rm --name mongoDB mongo

# create network

docker network create todo-network

docker build -t todo-backend-image .

docker run --rm -d --name mongoDB --network todo-network mongo

docker run --name todo-backend-container --rm -it -p 80:80 --network todo-network todo-backend-image

docker run --name todo-frontend-container --rm -it -p 3000:3000 todo-frontend-image


Data storing in docker
create  volume
docker run --rm -d --name mongoDB -v data:/data/db --network todo-network mongo
add password in mongo

docker run  --name mongoDB -v data:/data/db --rm --network todo-network  -e MONGO_INITDB_ROOT_USERNAME=a -e MONGO_INITDB_ROOT_PASSWORD=a mongo

----
live source code updare in docker container(not -working)

docker run --name todo-backend-conatiner -v "C:/Users/DELL/Desktop/Docker/mern-app/backend/:/app" -v logs:/app/logs -v /app/node_modules --rm -p 80:80 -it --network todo-network todo-backend-image