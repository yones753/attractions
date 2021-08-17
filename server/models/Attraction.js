const mongoose = require('mongoose')
const Schema = mongoose.Schema

const attractionSchema = new Schema({
    attraction_id: {type: Number ,require : true},
    name: {type: String,require : true},
    address: {type: String,require : true  },
    attraction_type: {type: String,require : true},
    opening_hours: { type: String,require : true},
    url: {type: String ,require : true },
    latitude: {type: Number ,require : true},
    longitude: {type: Number,require : true },
    isFavorites: {type: Boolean ,require : true},
})
const Attraction = mongoose.model("attraction", attractionSchema)
module.exports = Attraction