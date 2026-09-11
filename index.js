import express from 'express';

const app = express();

const subscribeToRoutes = require('./routes/index');

app.use(express.static('static'));

subscribeToRoutes(app);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})