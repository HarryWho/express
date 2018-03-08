FROM node:8.9.4
WORKDIR /express
COPY package.json /express
RUN npm install
COPY . /express
CMD node index.js
EXPOSE 5001