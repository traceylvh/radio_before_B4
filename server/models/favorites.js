var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Favorites = new Schema({
    title: {type: String},
    id: {type: String},
    artist: {type: String},
    url: {type: String}
});

module.exports = mongoose.model("Favorites", Favorites);
