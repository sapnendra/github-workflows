FROM node:24-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]

# docker build -t tech-terms-backend .
# docker run -p 3000:3000 --name backend tech-terms-backend
# docker run -p 3000:3000 --name backend --env-file .env tech-terms-backend