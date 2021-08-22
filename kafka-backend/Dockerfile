# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build

WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 3000
CMD npm start