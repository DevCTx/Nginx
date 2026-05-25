FROM node:20
WORKDIR /app

# Dependencies first to put all this in cache
COPY package.json package-lock.json ./
RUN npm install

# Then the code and static files
COPY server.js .
COPY public ./public

EXPOSE 3000

CMD ["node","server.js"]