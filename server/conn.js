const mongoose = require('mongoose')
require('dotenv').config();
const data = require("./data.json")
const  {Movie} = require("./model/movieSchema")

mongoose.connect(process.env.MONGO_URL).then(async() => {
    if ( await Movie.count() === 0){
        await Movie.create(data)
    }
    console.log('Connected to Database')
}).catch((err) => {
    console.log(err)
})