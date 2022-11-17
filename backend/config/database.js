const mongoose = require('mongoose');


const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URL,{}).then(() => {console.log('connectid');});
}


module.exports = connectDatabase