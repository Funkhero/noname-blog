FROM node:10

WORKDIR /dist

COPY . .

RUN touch .env

RUN npm install

RUN npm run svg

COPY .docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

WORKDIR /dist

EXPOSE 3000

CMD ["entrypoint.sh"]
