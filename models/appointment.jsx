var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var appSchema = new Schema ({
    appointment: {type: Number, default: 'No'},
    appDate: String,
    appLocation: String,
    appPhone: Number,
    appWho: String,
    appReason: String,
    tested: {type: Number, default: 'No'},
    cost: {type: Number, default: 0},
},{
    timestamps: true
});

module.exports = mongoose.model('Appointment', appSchema);