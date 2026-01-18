const express = require('express');
const router = express.Router();
const Person = require("./../moduls/Person");

//POST route to add a person  
router.post('/', async (req, res) => {
    try {
        const data = req.body
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log("data saved")
        res.status(200).json(response)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Internal data is not send" })

    }
});
//GET route to add a person
router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('data Get')
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Data is not Found" })
    }
});

// GET FOR WORKTYPE IN PERSON FIND A NAME , ID , OR ANY SPECIFIC ITEMS
router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType; //Extract the work type from the URL parameter
        if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
            const response = await Person.find({ work: workType });
            console.log("response fetched")
            res.status(200).json(response)
        } else {
            res.status(404).json({ error: 'Invail error workTpye' })

        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Data is not Found" })
    }
})

module.exports = router;