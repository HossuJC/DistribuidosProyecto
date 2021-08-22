# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as builder

# Set the working directory
RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
RUN npm install --legacy-peer-deps
COPY . /app
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

COPY --from=builder /app/dist/proyecto /usr/share/nginx/html
EXPOSE 4200:80