# build
FROM node:22-alpine AS build
WORKDIR /app
COPY . .
RUN npm install 
RUN npm run build

# production
FROM node:22-alpine
WORKDIR /app
COPY --from=build /app/build /app/src
COPY ["package.json", "package-lock.json*", "./"]
COPY ["./start.sh", "./"]
RUN npm ci --omit=dev

EXPOSE 3000

CMD ["sh","./start.sh"]