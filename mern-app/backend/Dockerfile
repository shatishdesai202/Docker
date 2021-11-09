FROM node:latest

WORKDIR ./app

COPY package.json /app

COPY . /app

RUN npm install

EXPOSE 80

CMD [ "npm", "start" ]