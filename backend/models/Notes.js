const mongoose = require('mongoose');

const NotesSchema = new Schema ({
    name : {
        type : String,
        required : true,
    },
    description : {
        type : String,
    },
    tag : {
        type : String,
        default : "General"
    },
    date : {
        type : Date,
        default : Date.now,
    }
});

module.exports = mongoose.model('Notes', NotesSchema);