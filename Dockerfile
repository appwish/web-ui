
FROM node:10

WORKDIR /first_next_app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm","start"]