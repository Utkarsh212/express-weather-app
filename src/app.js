const express = require('express');
const path = require('path');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
const app = express();

const staticPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', viewsPath)
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

app.use(require('../routes/route'))

app.listen(port, () => {
    console.log(`Server listening on PORT: http://localhost:${port}/`)
});