
FROM node:lts-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

FROM base AS builder
RUN npm run build

FROM node:lts-alpine AS production
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/views ./views
COPY --from=builder /app/public ./public
COPY package*.json ./
RUN npm install --production && npm prune --production
EXPOSE 3000
CMD ["node", "dist/bundle.js"]

FROM base AS development
WORKDIR /app
CMD ["npm", "run", "dev"]
