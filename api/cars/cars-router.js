// DO YOUR MAGIC
const router = require('express').Router()
const mw = require('./cars-middleware')
const Car = require('./cars-model')

router.get('/', async (req, res, next) => {
    try{
        const cars = await Car.getAll()
        res.json(cars)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', 
    mw.checkCarId, 
    async (req, res, next) => {
        const car = await Car.getById(req.params.id)
        res.json(car)
    })

router.post('/',
    mw.checkCarPayload,
    mw.checkVinNumberUnique,
    async (req, res, next) => {
        try{
            const newCar = await Car.create({
                vin: ,
                make: ,
                model: ,
                mileage: ,
                title: ,
                transmission: 
            })
        } catch (err) {
            next(err)
        }
    })