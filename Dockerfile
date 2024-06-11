FROM node:14-slim

WORKDIR /usr/src/app

RUN npm init -y

RUN npm install express @google-cloud/storage

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["node", "app.js"]
