FROM node:24-alpine

RUN npm install -g pnpm

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install && npm add -g @rspack/cli

COPY . .

RUN npx rspack build

CMD ["node", "dist/bundle.js"]
