const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const conectToDB = require('./services/db');

const authRoutes = require('./routes/auth');

const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);

conectToDB().then(
  () => {
    console.info("Подключение к MongoDB успешно!");
    app.listen(process.env.PORT, () => {
      console.log(`Backend-сервер запущен на порту ${process.env.PORT}!`);
    });
  },
  (err) => {
    console.error(`Ошибка подключения к MongoDB: ${err}`);
    console.error('Вомзожно, стоит запустить сервер MongoDB...');
  }
);
