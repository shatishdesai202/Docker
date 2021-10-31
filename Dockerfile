# base image
FROM node 

# working directory path inside image
WORKDIR /app

# COPY Host file system image/container file system 
COPY . ./app

# command to run
RUN npm install

# expose port
EXPOSE 8080

# execute command run in container not a build time
CMD [ "node", "app.js" ]