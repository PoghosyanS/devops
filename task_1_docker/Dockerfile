FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --production

RUN npm install express

COPY . .

RUN adduser -D myuser

USER myuser

EXPOSE 5000

CMD ["node", "app.js"]
