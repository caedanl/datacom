//   █████╗ ██████╗ ██╗
//  ██╔══██╗██╔══██╗██║
//  ███████║██████╔╝██║
//  ██╔══██║██╔═══╝ ██║
//  ██║  ██║██║     ██║
//  ╚═╝  ╚═╝╚═╝     ╚═╝
//  

const express = require('express');
const app = express();
const Message = require('../models/messages');

// GET ALL MESSAGE ///////////////////////////////////////
app.get("/api/message/all", async (req, res) => {
   try {
      const results = await Message.find({ "resolved": false });
      console.log(results);
      res.send(results);
   } catch (err) {
      console.log("ERROR: " + err.reason);
      res.sendStatus(404);
   }
})

// ADD MESSAGE //////////////////////////////////////////
app.post("/api/message/add", async (req, res) => {
   try {
      const details = req.body;
      console.log("Incoming message details:");
      console.log(details);

      const newMessage = new Message({
         firstName: details.firstName,
         lastName: details.lastName,
         email: details.email,
         phone: details.phone,
         subject: details.subject,
         message: details.messageContent,
         resolved: false
      });

      await Message.create(newMessage);

      ((message) => {
         console.log(message);
         res.send(message);
      })("Message submitted")

   } catch (err) {
      console.log("ERROR: " + err.reason);
      res.sendStatus(404);
   }
});

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
app.post("/api/message/update/:id", async (req, res) => {
   try {
      await Message.findByIdAndUpdate(req.params.id, req.body);
      res.send("Updated");
   } catch (err) {
      console.log(err);
   }
});

app.post("/api/message/resolve/:id", async (req, res) => {
   try {
      await Message.findByIdAndUpdate(req.params.id, { resolved: true });
      res.send("Resolved");
   } catch (err) {
      console.log("ERROR: " + err.reason);
      res.sendStatus(404);
   }
});

// DELETE MESSAGE ///////////////////////////////////////
app.post("/api/message/delete/:id", async (req, res) => {
   try {
      await Message.findByIdAndDelete(req.params.id);
      res.send("Deleted");
   } catch (err) {
      console.log(err);
   }
});

module.exports = app;