var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var noteSchema = new Schema ({
    title: {
        type: String, 
        required: true
    },
    currentDate: Date,
    description: String,

},{
    timestamps: true
});

module.exports = mongoose.model('Note', noteSchema);