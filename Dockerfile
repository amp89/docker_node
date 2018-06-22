FROM node:latest

WORKDIR /usr/src/app

COPY ./appcode/*.json /usr/src/app/
RUN npm install
COPY ./appcode/*.js /usr/src/app/

EXPOSE 5000

CMD ["npm","start"]