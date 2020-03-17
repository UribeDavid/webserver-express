const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname+'/public'));

//Express HBS engine
hbs.registerPartials( __dirname+'/views/parcials');
app.set('view engine', 'hbs');


 
app.get('/', (req, res) => {
    
    res.render('home', {
        nombre: 'david'
    });
    //res.send('Hello World');
})

app.get('/about', (req, res) => {
    
    res.render('about');
    //res.send('Hello World');
})
 
app.listen(port, () => {
    console.log(`Escuchando puerto ${port}`);
});