
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
require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static("react-client/build"));

// MONGOOSE SETUP ///////////////////////////////////////
const uri = process.env.DB_URL

mongoose.connect(uri, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
   console.log("Connection is up");
});

// REACT CLIENT /////////////////////////////////////////
app.get("/", (req, res) => {
   res.sendFile(path.join(__dirname, "react-client", "build", "index.html"))
})

// MESSAGES ROUTER //////////////////////////////////////
app.use(messageRouter);

// LISTEN ///////////////////////////////////////////////
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log("Listening on port " + PORT))




