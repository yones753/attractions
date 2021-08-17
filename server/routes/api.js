const express = require('express')
const router = express.Router()
const Attraction = require('../models/Attraction')
const getDistance = require('../helpers/GetDistance')
const maxRadius = 40

router.get('/attraction', async (req, res) => {
    const { longitude, latitude } = req.query
    const userCoordinates = { longitude: parseFloat(longitude), latitude: parseFloat(latitude) }
    try {
        const attractionsAll = await Attraction.find({})
        const result = attractionsAll.map(a => {
            const distance = getDistance(userCoordinates, { longitude: a.longitude, latitude: a.latitude })
            return { ...a.toObject(), distance }
        })
        res.status(200).send(result.filter(t => t.distance <= maxRadius).sort((a, b) => a.distance - b.distance))
    } catch (error) {
        console.log("AAAA=================" ,error );
        res.status(500).send({ "msg": "תנסה שוב !", "code": 500 })
    }
})

router.put('/attraction', async (req, res) => {
    try {
        const result = await Attraction.findById({ _id: req.body.id })
        result.isFavorites = !result.isFavorites;
        result.save()
        res.status(200).send({ "msg": (result.isFavorites) ? "נוסף לרשימה" : "נמחק מהרשימה", "code": 200 })
    } catch (error) {
        res.status(500).send({ "msg": "הפעולה נכשלה  תנסה יותר מאוחר", "code": 500 })
    }
});

module.exports = router