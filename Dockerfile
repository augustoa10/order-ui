FROM node:12

ARG ENV=development

ENV NODE_ENV=$ENV

WORKDIR /root

COPY package.json .
COPY yarn.lock .

RUN yarn install

ENV PATH="$PATH:/root/node_modules/.bin"

COPY src src
COPY angular.json .env.* tsconfig.* ./

RUN yarn build

EXPOSE 4200

CMD ["./node_modules/.bin/ng", "serve", "--host", "0.0.0.0"]
