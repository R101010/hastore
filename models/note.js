var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var noteSchema = new Schema ({
    title: {
        type: String,
    },
    currentDate: {
        type: String,
    },
    description: {
        type: String,
    },
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', noteSchema);