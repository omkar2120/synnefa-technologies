const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
   title:{type:String},
   language:{type:String},
   price:{type:Number},
   theater:{type:String},
   image:{type:String},
})

const bookingSchema = new mongoose.Schema({
    movie:{type:mongoose.Types.ObjectId ,ref:"Movie"},
    numberOfTickets:{type:Number}
 })

const Movie = mongoose.model('Movie', movieSchema)
const Booking = mongoose.model('Booking', bookingSchema)

module.exports = {Movie, Booking}