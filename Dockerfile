# Dockerfile
FROM node:14
# Or whatever Node version/image you want
WORKDIR /var/www/app
 

COPY . .


RUN npm install
RUN npm install -g nodemon
RUN npm install -g ts-node


