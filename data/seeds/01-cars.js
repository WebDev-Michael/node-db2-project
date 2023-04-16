// STRETCH
const cars = [
    {
        vin: '3TMMU4FN8CM049190',
        make: 'gmc',
        model: 's15',
        mileage: 154232,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: 'JNKCV51F04M710639',
        make: 'gmc',
        model: 'yukon',
        mileage: 210043,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: '1HD1KEM1XDB602203',
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