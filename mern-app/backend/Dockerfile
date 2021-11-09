FROM node:latest

WORKDIR ./app

COPY package.json /app

COPY . /app

RUN npm install

EXPOSE 8080

CMD [ "npm", "start" ]