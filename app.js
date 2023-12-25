const express = require('express');
const path = require('path');

const app = express();
const port = 80;


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index');
});


app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/details', (req, res) => {
    res.render('details');
});

app.get('/listing_detail', (req, res) => {
    res.render('listing_detail');
});

app.get('/product', (req, res) => {
    res.render('product');
});

app.get('/product_detail', (req, res) => {
    res.render('product_detail');
});
app.get('/view-products', (req, res) => {
    res.render('view-products');
});

app.get('/marble', (req, res) => {
    res.render('marble');
});

app.get('/Granite', (req, res) => {
    res.render('Granite');
});

app.get('/onyx', (req, res) => {
    res.render('onyx');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;