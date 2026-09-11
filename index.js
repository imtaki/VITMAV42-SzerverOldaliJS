import express from 'express';

const app = express();


app.use(express.static('static'));
app.use(express.json());

require('./routes/index')(app);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})