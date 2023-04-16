// STRETCH
const cars = [
    {
        vin: '11111111111111111',
        make: 'gmc',
        model: 's15',
        mileage: 154232,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '1111111134543111',
        make: 'gmc',
        model: 'yukon',
        mileage: 210043,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: '111111987625411111',
        make: 'ford',
        model: 'f100 custom',
        mileage: 162453,
        title: 'salvage',
        transmission: 'automatic'
    }
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}