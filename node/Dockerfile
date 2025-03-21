FROM node:23-alpine

# Create app directory
WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 8001

CMD ["npm", "start"]