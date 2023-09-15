const connectToMongo=require('./db');
connectToMongo();
const express = require('express')
const app = express()
const port = 5000
// available routes

app.use(express.json())
// our available routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.get('/', (req, res) => {
  res.send('Hello Jamal!')
})
app.listen(port, () => {
  console.log(`Example app listeing on port ${port}`)
})