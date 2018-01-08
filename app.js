const express = require ('express');
const app = express();
const exphbs = require('express-handlebars')


//handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//middleware
app.use(function( req, res, next){
    // console.log(Date.now());
    // req.name = 'Dingus Dongus';
    next();
});


//index route
app.get('/', (req, res)=>{
    const title = 'welcome to my house'
    res.render('index', {
        title: title
    });
});

//about route
app.get('/about', (req, res)=>{
    res.render('about')
})

const port = 5000;

app.listen(5000, () =>{
    console.log(`server started on port ${port}`);

});