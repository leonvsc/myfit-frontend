FROM node:22-alpine

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 8081

CMD ["npm", "run", "web"]