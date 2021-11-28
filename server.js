
//  ███████╗██╗  ██╗██████╗ ██████╗ ███████╗███████╗███████╗
//  ██╔════╝╚██╗██╔╝██╔══██╗██╔══██╗██╔════╝██╔════╝██╔════╝
//  █████╗   ╚███╔╝ ██████╔╝██████╔╝█████╗  ███████╗███████╗
//  ██╔══╝   ██╔██╗ ██╔═══╝ ██╔══██╗██╔══╝  ╚════██║╚════██║
//  ███████╗██╔╝ ██╗██║     ██║  ██║███████╗███████║███████║
//  ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝
//  

// IMPORTS //////////////////////////////////////////////
const express = require('express');
const app = express();
const path = require("path");
const axios = require('axios');
const cors = require('cors');
const mongoose = require('mongoose');
const messageRouter = require("./routes/messageRoutes")
const api = require('./routes/api')
require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static("client/build"));

// MONGOOSE SETUP ///////////////////////////////////////
const uri = process.env.DB_URL

mongoose.connect(uri, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
   console.log("MongoDB Atlas is connected");
});

// MESSAGES ROUTER //////////////////////////////////////
app.use(messageRouter);
app.use(api);

// REACT CLIENT /////////////////////////////////////////
app.get("*", (req, res) => {
   res.sendFile(path.join(__dirname, "/client", "build", "index.html"))
})

// LISTEN ///////////////////////////////////////////////
app.listen(3000, () => {
   console.log("Listening on port " + "3000")
   console.log(`

  ██████╗  █████╗ ████████╗ █████╗  ██████╗ ██████╗ ███╗   ███╗
  ██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗██╔════╝██╔═══██╗████╗ ████║
  ██║  ██║███████║   ██║   ███████║██║     ██║   ██║██╔████╔██║
  ██║  ██║██╔══██║   ██║   ██╔══██║██║     ██║   ██║██║╚██╔╝██║
  ██████╔╝██║  ██║   ██║   ██║  ██║╚██████╗╚██████╔╝██║ ╚═╝ ██║
  ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝
  
  `)
})




