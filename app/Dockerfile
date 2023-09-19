FROM node:18-alpine
LABEL authors="giosal"

WORKDIR /frontend

COPY frontend/package*.json /frontend/

RUN npm install

WORKDIR ../backend

COPY backend/package*.json /backend/

RUN npm install

WORKDIR ..

COPY . .

EXPOSE 3000

CMD npm run dev
