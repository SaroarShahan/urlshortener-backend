FROM node:12-alpine

RUN apk update && apk add yarn

WORKDIR /urs/app

COPY . .

RUN yarn

CMD ["yarn", "dev"]