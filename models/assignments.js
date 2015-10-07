/**
 * Created by m3rkz0r on 10/7/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var assignmentSchema = new Schema({
    assignment_number : Number,
    student_name : String,
    score : Number,
    date_completed : String
});

var Assignment = mongoose.model('Assignment',assignmentSchema);

module.exports = Assignment;