const express = require('express');
const Calendar = require('../models/calendar');
const router = express.Router();

router.get('/:calId?', function(req, res, next) {
    var calendarId = req.params.calId;
    if(calendarId == null) {
        // Create new calendar
        console.log("Create a new calendar.");
        Calendar.create({creationDate: new Date()}).then(function(calendar) {
            console.log(calendar);
            calendarId = calendar._id;
            res.redirect('/' + calendarId);
        });
    } else {
        console.log("Load calendar: " + calendarId);
        Calendar.findOne({_id: calendarId}).then(function(calendar) {
            console.log(calendar);
            res.render('home');
        });
    }
});

module.exports = router;