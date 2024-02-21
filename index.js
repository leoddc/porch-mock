const express = require('express');
const port = 3000;
const app = express();

app.get('/', (req, res) => {
    console.log(req);
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});