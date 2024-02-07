# FROM node:alpine

# WORKDIR /app

# COPY --from=ghcr.io/ufoscout/docker-compose-wait:latest /wait /wait

# # COPY package.json and package-lock.json files
# COPY package*.json ./

# # generated prisma files
# COPY prisma ./prisma/

# # COPY ENV variable
# COPY .env ./

# # COPY tsconfig.json file
# COPY tsconfig.json ./

# # COPY
# COPY . .


# CMD /wait

# RUN npx prisma generate

# RUN npx prisma migrate dev

# # Run and expose the server on port 3000
# EXPOSE 3000

# # A command to start the server
# CMD npm start


# FROM node:20-alpine

# # RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# WORKDIR /home/node/app

# COPY package*.json ./

# USER node

# RUN npm install

# # RUN npm install -g @nestjs/cli

# COPY --chown=node:node . .

# EXPOSE 3000

# CMD [ "npm","run" ,"start:dev" ]


FROM node:20-alpine as build
RUN echo "aeryle la salope"
WORKDIR /app
COPY --chown=node:node package.json package-lock.json ./
COPY --chown=node:node . .
RUN npm ci
RUN npm run build
 
FROM node:20-alpine
RUN echo "aeryle la salope 2"
RUN apt-get update && apt-get install curl -y
WORKDIR /app
COPY --chown=node:node --from=build /app/package.json /app/package-lock.json ./
COPY --chown=node:node --from=build /app/node_modules ./node_modules
COPY --chown=node:node --from=build /app/dist ./dist
RUN npm prune --production
USER node
EXPOSE 3000
HEALTHCHECK --interval=15s --timeout=3s --start-period=15s CMD curl -f http://localhost:3000/api/health
CMD ["node", "dist/src/main.js"]
