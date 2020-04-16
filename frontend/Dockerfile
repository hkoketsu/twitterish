# Build
FROM node:13-alpine3.11 as node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build:prod

# Run
FROM nginx:mainline-alpine

COPY --from=node /usr/src/app/dist/twitterish /usr/share/nginx/html
