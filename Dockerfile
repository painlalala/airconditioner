# Stage 1: Build the application
FROM node:18.7.0 AS builder
WORKDIR /app

# Copy dependency definitions and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the application using Vite
RUN npm run build

# Stage 2: Serve the built app using Nginx
FROM nginx:stable-alpine
# Copy the build output (default Vite output is "dist") to the Nginx html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
