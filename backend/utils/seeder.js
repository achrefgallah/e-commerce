const Product = require('../models/product')
dotenv = require('dotenv')
connectDatabase = require('../config/database')

const products = require('../data/products')



dotenv.config({path: 'backend/config/config.env'})

connectDatabase()

const seedProducts = async () =>{
    try{
        await Product.deleteMany();
        console.log('delelelel')
        await Product.insertMany(products);
        console.log('inserted')
        process.exit()
    }catch(error){
        console.log(error.message)
        process.exit()
    }
}


seedProducts()