FROM node:15-alpine

WORKDIR /app

# Add bash
RUN apk add --no-cache bash

# Copy package.json
COPY ./package.json .

# Install dependencies
RUN yarn
COPY . .
EXPOSE 3333

# Generate ~/node_modules/.prisma folder
RUN yarn prisma generate
