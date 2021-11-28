const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
   firstName: {
      type: String,
      required: true,
   },
   lastName: {
      type: String,
   },
   email: {
      type: String,
      required: true,
   },
   phone: {
      type: String,
   },
   subject: {
      type: String,
      required: true,
   },
   message: {
      type: String,
      required: true,
   },
   resolved: {
      type: Boolean,
      required: true,
   }
});

const Message = mongoose.model("message", messageSchema);

module.exports = Message;