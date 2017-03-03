const app = require('connect')(),
        fs= require('./fileserver');

app.use(fs);

app.use('/', (req, res, next) => {
    res.write('<h1>Welcome to my Homework</h1><br/>');
    next();
});

app.use((req, res) => {
    res.write('Good Night');
});

app.listen(80);
