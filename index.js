const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const subscribeToRoutes = require('./routes/index');

subscribeToRoutes(app);


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})