const express = require('express');
const port = 3000;
const numberOfFakes = 100;
const app = express();
const errorChance = 0.0; // chance that endpoint will throw an error
const { faker } = require('@faker-js/faker');

function createRandomRow() {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        donatingFood: faker.datatype.boolean(),
        donatingMoney: faker.datatype.boolean(),
        location: {
            lat: faker.location.latitude(),
            lon: faker.location.longitude()
        },
    };
}

app.get('/donor-list', (req, res) => {
    let donorList = [];
    let i = 0;
    do {
        donorList.push(createRandomRow());
        i++
    }
    while (i < numberOfFakes);

    if (Math.random() < errorChance) {
        return res.status(400).send('Error getting donor list.');
    }

    return res.send(donorList);
});

app.listen(port, () => {
    console.log(`Mock endpoints running locally. Use http://localhost:${port}/...`);
});