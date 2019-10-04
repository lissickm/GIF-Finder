const express = require("express");
const pool = require("../modules/pool");
require("dotenv").config();
const axios = require("axios");
const router = express.Router();

router.get("/:searchTerm", (req, res) => {
  // return all categories
    let searchTerm = req.params.searchTerm
    console.log("THIS THE SEARCH TERM SERVER SIDE", searchTerm);
  axios
    .get(
      `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${req.params.searchTerm}`
    )
    .then(response => {
      console.log("success server side giphy GET", response.data);
      res.send(response.data);
    })
    .catch(error => {
      console.log("error in server side GET giphy", error);
    });
});

module.exports = router;
