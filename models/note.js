var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var noteSchema = new Schema ({
    title: {type: String, required: true},
    currentDate: String,
    description: String,
    batteryAge: {type: Number, default: 1},
    cleaned: String
},{
    timestamps: true
});

module.exports = mongoose.model('Note', noteSchema);