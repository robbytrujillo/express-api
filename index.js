const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello Robby')
})

app.listen(port, () => {
    console.log(`app running at http://localhost:${port}`)
})
