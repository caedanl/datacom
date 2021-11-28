const express = require('express');
const app = express();

app.get("/api/test", (req, res) => {
   res.send("API is working")
})

app.get("/api/health", (req, res) => {
   res.sendStatus(200)
})

module.exports = app;