#!/bin/sh
npx prisma migrate deploy
npm run db:seed 
npm start