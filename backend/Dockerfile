FROM node:18-alpine

WORKDIR /app

# Copy dependency manifests first for effective layer caching
COPY package*.json ./

# Install production dependencies
RUN npm ci --only=production

# Copy the rest of the application source code
COPY . .

# Expose the backend port matching your NGINX reverse proxy configuration
EXPOSE 3200

# Start the Node.js application
CMD ["node", "server.js"]
