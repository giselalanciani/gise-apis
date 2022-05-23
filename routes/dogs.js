const express = require("express");

const router = express.Router();

router.get("/search", (req, res) => {
  return res.json([
    {
      id: "1111111",
      url: "https://cdn2.thedogapi.com/images/HJ1297iE7.gif",
    },
    {
      id: "2222222",
      url: "https://cdn2.thedogapi.com/images/nTmwV3lbd.jpg",
    },
    {
      id: "3333333",
      url: "https://cdn2.thedogapi.com/images/YmaAJ-aLR.jpg",
    },
  ]);
});

module.exports = router;
