var express = require('express');
var router = express.Router();
var Assignment = require('../models/assignments');

router.get('/getAssignments/:id?', function (req, res, next) {
    var assignment_number = req.params.id;
    if (assignment_number) {
        Assignment.findOne({assignment_number: assignment_number}, function (err, assignment) {
            res.json(assignment);
        })
    } else {
        Assignment.find({}, function (err, assignments) {
            res.json(assignments);
        })
    }
});//end get router

router.post('/postAssignments', function(req,res,next){
    var assignment = new Assignment(req.body);

    assignment.save(function(err) {
        if (err) {
            console.log("ERROR ERROR");
            res.send("Wooooooooo, there was an error");
        } else{
               console.log(Date() + " Hey your data got written!");
                res.send(200);
        }
    });

});

module.exports = router;
