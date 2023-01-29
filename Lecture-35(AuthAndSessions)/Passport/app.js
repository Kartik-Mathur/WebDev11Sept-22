const express = require('express');
const session = require('express-session');
const app = express();
const passport = require('./passport');
const PORT = 4444;
const User = require('./database/user');
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/profile', (req, res) => {
    res.render('profile')
})

app.get('/signup', (req, res) => {
    res.render('signup');
})

app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    let newUser = new User({ username, password });
    newUser.save();
    res.redirect('/');
})

app.post('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

app.post('/login',
    passport.authenticate('local', { failureRedirect: '/' }),
    function (req, res) {
        res.redirect('/profile');
    });

app.get('/auth/facebook',
    passport.authenticate('facebook'));
    
app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });


app.listen(PORT, () => {
    console.log('http://localhost:' + PORT);
})