FROM node:18-alpine

WORKDIR /

COPY . .

RUN npm install prom-client

EXPOSE 3000

CMD ["node", "index.js"]