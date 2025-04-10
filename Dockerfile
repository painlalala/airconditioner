# Use Node.js 18.7.0 as the base image
FROM node:18.7.0

# Set working directory
WORKDIR /app

# Copy package files for dependency installation
COPY package.json package-lock.json* ./
RUN npm ci --silent

# Copy the entire project
COPY . .

# Expose the default Vite dev server port (5173)
EXPOSE 5173

# Start the Vite development server with --host to bind to 0.0.0.0
CMD ["npm", "run", "dev", "--", "--host"]
