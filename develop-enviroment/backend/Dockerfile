#using alpine node to reduce image size, but can result in some bugs for advanced projects
FROM node:10-alpine

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
CMD ["node", "app.js"]