FROM node:latest

WORKDIR /usr/src/app

# COPY ./appcode/*.json /usr/src/app/
RUN npm install
RUN npm install -g nodemon
# COPY ./appcode/*.js /usr/src/app/

EXPOSE 5000

# CMD ["npm","start"]