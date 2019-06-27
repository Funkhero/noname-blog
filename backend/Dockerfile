FROM node:10

WORKDIR /app

RUN npm install pm2 -g

COPY . .

RUN npm install

COPY .docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

EXPOSE 4000

CMD ["entrypoint.sh"]