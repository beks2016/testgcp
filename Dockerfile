FROM node:14-slim

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

ENV PORT=8080
CMD ["node", "app.js"]
