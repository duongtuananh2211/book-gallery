# Dockerfile
FROM node:14
# Or whatever Node version/image you want

RUN npm install

WORKDIR '/var/www/app'