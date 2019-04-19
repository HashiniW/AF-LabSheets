'use strict';

const express = require('express'),
        mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    birthday: Date
});

const User = mongoose.model('User', UserSchema);

module.exports = User;

mongoose.Promise = global.Promise;

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/expressjsSample', err => {
    if(err) {
        console.log(err);
        process.exit(1);
    }
});

const UserModel = require('./user.model');

app.use(express.static(__dirname));
app.get('/', (req, res, next) => {
    res.sendFile('index.html');
});

app.get('/users', (req, res) => {
    UserModel.find().exec().then(users => {
        res.json(users);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

app.get('/users/:id', (req, res) => {
    UserModel.findById(req.params.id).exec().then(user => {
        res.json(user || {});
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

app.post('/users', (req, res) => {
    const user = new UserModel(req.body);
    user.save().then(user => {
        res.json(user);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

app.put('/users/:id', (req, res) => {
    const user = new UserModel(req.body);
    user.update().then(() => {
        res.sendStatus(200);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

app.delete('/users/:id', (req, res) => {
    UserModel.remove(req.params.id).then(() => {
        res.sendStatus(200);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

app.listen(3000, err => {
    if(err) {
        console.error(err);
        return;
    }
    console.log('app listening on port 3000');
});