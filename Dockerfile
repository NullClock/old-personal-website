FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 5000

ENV NODE_ENV=production
ENV PORT=5000
ENV ADMIN_PIN=1234

CMD ["node", "server.js"]
