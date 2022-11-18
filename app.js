const express = require('express')
const app = express()
const port = 3000

const connectDB = require('./db/connect');
const productsRouter = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

// middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
  });
app.listen(port, () => console.log(`Example app listening on port ${port}!`))