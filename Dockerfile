FROM node:16
WORKDIR /src/
COPY package.json package-lock.json /
RUN npm install
COPY . .
RUN npm build

FROM node:16-alpine
COPY --from=0 /src/ .
EXPOSE 8080
ENV NODE_ENV production

CMD npm start