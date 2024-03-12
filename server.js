const express = require('express');
const ExpressHandlebars = require('express-handlebars');
const open = require('open');
const homeRoutes = require('./routes/home');
const goodRespRoutes = require('./routes/goodResp');
const badRespRouters = require('./routes/badResp');

const app = express();

const handlebars = ExpressHandlebars.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');

app.use(express.urlencoded({extended: false}));
app.use('/',homeRoutes);
app.use('/goodResp',goodRespRoutes);
app.use('/badResp',badRespRouters);

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
    open(`http://localhost:${PORT}`);
});

