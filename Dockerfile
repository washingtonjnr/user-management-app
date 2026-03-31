FROM node:20.19.0-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --ignore-scripts

COPY src/ ./src/
COPY angular.json tsconfig*.json ./

RUN npm run build -- --configuration production

FROM nginx:1.27.4-alpine

COPY --from=builder /app/dist/user-management/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]