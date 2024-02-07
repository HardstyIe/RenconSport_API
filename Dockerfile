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


FROM node:alpine

# RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

# RUN npm install -g @nestjs/cli

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "npm","run" ,"start:dev" ]
