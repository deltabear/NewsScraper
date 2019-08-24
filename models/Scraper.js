var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ScraperSchema = new Schema({
  // `name` must be unique and of type String
  name: {
    type: String,

  },
  body: {
    type: String,
    required: true
  },
 
});

// This creates our model from the above schema, using mongoose's model method
var Scraper = mongoose.model("Scraper", ScraperSchema);

// Export the Scraper model
module.exports = Scraper;
