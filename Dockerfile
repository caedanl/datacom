FROM node:16-slim as client-build

WORKDIR /usr/app/client/
COPY client/package*.json ./
RUN npm install
COPY client/src/ ./src
COPY client/public/ ./public
RUN npm run build


FROM node:16-slim

WORKDIR /usr/app/client/
COPY --from=client-build /usr/app/client/build/ ./build
WORKDIR /usr/app/

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]

