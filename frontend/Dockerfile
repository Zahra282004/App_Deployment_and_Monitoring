FROM node:22-alpine AS build

WORKDIR /usr/app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:1.27-alpine

# Copy built static assets
COPY --from=build /usr/app/dist /usr/share/nginx/html

# Copy custom Nginx configuration for API routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx","-g", "daemon off;"]
