const app = require('./app');
const connectDatabase = require('./config/database')
const dotenv = require('dotenv');

process.on('uncaughtException', err =>{
    console.log(`ERROR: ${err.message}`);
    console.log('shutting down server due to uncaught exeption');
    server.close(()=>{
        process.exit(1)
    })
})

dotenv.config({path: 'backend/config/config.env'})

connectDatabase()

const server = app.listen(process.env.PORT, ()=>{
    console.log(`${process.env.PORT}`)
})

process.on('unhandledRejection', err=>{
    console.log(`ERROR: ${err.message}`);
    console.log('shutting down the server due to unhandled promise rejection');
    server.close(()=>{
        process.exit(1)
    })
})