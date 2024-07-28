const router = require('express').Router();
let Sundarsath = require('../models/sundarsath.model');
const { request, response } = require('express');

router.route('/').get((request, response) => {
    Sundarsath.find()
        .then(sundarsath => response.json(sundarsath))
        .catch(error => response.status(400).json('Error: ' + error));
});

router.route('/add').post((request, response) => {
    const firstName = request.body.firstName;
    const lastName = request.body.lastName;
    const phoneNumber = Number(request.body.phoneNumber);
    const emailID = request.body.emailID;
    const dob = Date.parse(request.body.dob);
    const age = Number(request.body.age);
    const address = request.body.address;
    const nationality = request.body.nationality;
    const bloodGroup = request.body.bloodGroup;

    const newSundarsath = new Sundarsath({
        firstName,
        lastName,
        phoneNumber,
        emailID,
        dob,
        age,
        address,
        nationality,
        bloodGroup,
    });
    newSundarsath.save()
        .then(() => response.json('Sundarsath with name ' + firstName + ' ' + lastName + ' added'))
        .catch((error) => response.status(400).json('Error: ' + error));
});

router.route('/:id').get((req, res) => {
    Sundarsath.findById(req.params.id)
        .then(sundarsath => res.json(sundarsath))
        .catch(error => res.status(400).json('Error: ' + error))
});

router.route('/update/:id').post((req, res) => {
    Sundarsath.findById(req.params.id)
        .then(sundarsath => {
            sundarsath.firstName = req.body.firstName;
            sundarsath.lastName = req.body.lastName;
            sundarsath.phoneNumber = req.body.phoneNumber;
            sundarsath.emailID = req.body.emailID;
            sundarsath.dob = req.body.dob;
            sundarsath.age = req.body.age;
            sundarsath.address = req.body.address;
            sundarsath.nationality = req.body.nationality;
            sundarsath.bloodGroup = req.body.bloodGroup;

            sundarsath.save()
                .then(() => res.json('Sundarsath with name' + req.body.firstName + ' ' + req.body.lastName + ' has been updated'))
                .catch(error => res.status(400).json('Error: ' + error))
        })
        .catch(error => res.status(400).json('Error: ' + error));
});

module.exports = router;