/**
 * Created by User on 9/5/2016.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('Nerd', {
    name : {type : String, default: ''}
});
