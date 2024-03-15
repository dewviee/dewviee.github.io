FROM node:alpine

# Working directory
WORKDIR /app

# Copy project files
COPY ./package.json .
COPY ./yarn.lock .

RUN npm i yarn
RUN yarn

COPY . .

# Development mode for hot reloading
CMD ["yarn", "dev"]