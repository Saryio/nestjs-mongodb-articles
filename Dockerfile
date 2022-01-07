FROM node:alpine

WORKDIR /usr/app

COPY package.json/ ./

COPY package-lock.json ./

RUN npm install

RUN npm install -g @nestjs/cli

COPY . .

EXPOSE 3000

CMD [ "yarn", "start:dev"]
