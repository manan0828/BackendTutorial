const express = require("express");
const app = express();
app.use(express.json());

const models = require('./models');
const USER_ROUTER = require('./routes/user');
const USER_TRANSACTION = require('./routes/transaction');
const USER_AUTH = require('./routes/auth');

app.use('./users', USER_ROUTER);
app.use('./transaction', USER_TRANSACTION);
app.use('/auth', USER_AUTH);

app.use("*", (req, res, next) => {
    console.log('app works!');
    return res
        .status(404)
        .send({ 
            code: 400, 
            status: 'failed' 
        });
});

models.db_config
.sync({

}).then(() => {
    console.log('Connected to database');
}).catch( err => {
    console.log('Could not connect to the databse', err);
    process.exit();
});

app.listen(3000, () => {
    console.log('App is running on port 3000');
});