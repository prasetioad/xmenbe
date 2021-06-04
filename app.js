const express = require('express');
const cors = require('cors');

//Model
const db = require('./models')

const Routes = require('./routes')
const app = express()

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Sync Database
db.sequelize.sync().then(
    () => console.log(`[DATABASES] Connected`),
    (err) => console.log(`[DATABASES] Failed To Connect (${err})`)
);

app.use('/v1', Routes);
app.use('*', (req, res)=> {
    if(req.params['0'].match('/v1')){
        res.status(405).json({
            status: false,
            message: 'Not allowed',
            data: null,
        })
    }
})

app.get('/', (req, res)=>{
    res.json({
        message: 'Welcome to REST API',
    })
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log('Server Run in', + PORT);
})