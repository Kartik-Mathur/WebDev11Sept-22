const express = require('express');
const app = express();
const PORT = 4444;
const session = require('express-session');
app.set('view engine', 'hbs');
const MongoDBStore = require('connect-mongodb-session')(session);
const store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/connect_mongodb_session_test',
    collection: 'mySessions'
});

app.use(session({
    secret: 'ndawjkd jkwebkqbdbkjwqkdkqbwdkbqwkb',
    resave: false,
    saveUninitialized: true,
    cookie: {
        // maxAge: 10000
    },
    store: store
}))

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/login', (req, res) => {
    const { username, password } = req.query;
    req.session.username = username;
    req.session.loggedIn = true;
    req.session.password = password;
    req.session.newFeature = true;

    res.redirect('/profile');
})

app.get('/profile', (req, res) => {
    if (req.session.loggedIn) {

        res.render('profile', {
            username: req.session.username,
            password: req.session.password,
            newfeature: req.session.newFeature == true
        });
    }
    else {
        res.redirect('/');
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
})


app.listen(PORT, () => {
    console.log('http://localhost:' + PORT);
})