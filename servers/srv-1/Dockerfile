FROM alpine:3.10

RUN apk add --update nodejs npm

RUN addgroup -S node && adduser -S node -G node
RUN npm install --global yarn

USER node

RUN mkdir /home/node/code

WORKDIR /home/node/code

COPY --chown=node:node yarn.lock package.json index.js ./

RUN yarn install

COPY --chown=node:node . .

CMD ["yarn", "start"]