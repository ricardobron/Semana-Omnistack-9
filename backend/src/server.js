const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

mongoose.connect('mongodb+srv://ricardoslv688:GnEj55fw1jmCMOhp@cluster0-89ka9.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

io.on('connection', socket =>{
    const { user_id } = socket.handshake.query;
   
    connectedUsers[user_id] = socket.id;
});

app.use((req, res, next) => {
    req.io = io; 
    req.connectedUsers = connectedUsers;

    return next();
});

const app = express()
app.use(cors())
//app.use(cors({ origin: 'http://localhost:3333'}))
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes)


app.listen(3333) 