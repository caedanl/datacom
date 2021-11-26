const express = require('express');
const app = express();
// const mongoose = require('mongoose');
const Message = require('../models/messages');

// ADD MESSAGE //////////////////////////////////////////
app.post("/api/message/add", async (req, res) => {
   try {
      // console.log(req.body)
      
      const newMessage = new Message({
         firstName: "Bob",
         lastName: "Barker",
         email: "test@test.com",
         subject: "subject test",
         message: "message body"
      });
      
      await Message.create(newMessage);
      
      res.send("Message submitted")
      
   } catch (err) {
      console.log("ERROR: " + err.reason);
      res.sendStatus(404)
   }
})

// GET MESSAGE //////////////////////////////////////////
app.get("/api/message/id/:id", async (req, res) => {
   try {
      const results = await Message.findById(req.params.id).exec();
      console.log(results);
      res.send(results);
   } catch (err) {
      console.log("ERROR: " + err.reason);
      res.sendStatus(404)
   }
});

// UPDATE MESSAGE ///////////////////////////////////////
app.post("/api/message/update", async (req, res) => {
   try {
      await Message.findByIdAndUpdate(request.params.id, request.body);
      await Message.save();
      res.send()
   } catch (err) {
      console.log(err);
   }
});

// DELETE MESSAGE ///////////////////////////////////////
app.post("/api/message/delete", async (req, res) => {
   try {
   
   } catch (err) {
      console.log(err);
   }
})

module.exports = app;