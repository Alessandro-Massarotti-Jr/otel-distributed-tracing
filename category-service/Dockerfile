# build
FROM node:22-alpine as build
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
COPY ["./prisma", "./prisma"]
RUN npm ci --omit=dev
RUN npx prisma generate

EXPOSE 3001

CMD ["sh","./start.sh"]