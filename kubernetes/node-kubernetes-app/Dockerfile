FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "npm", "start" ]

# kubectl delete deployment kube-mern-app

# kubectl create deployment kube-mern-app --image=shatishdesai0000/kube-mern-app
