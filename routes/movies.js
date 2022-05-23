const express = require("express");

const router = express.Router();

const person1 = {
  id: 1212321,
  givenName: "Leonardo di Caprio",
};
const person2 = {
  id: 222222,
  givenName: "Jenifer Lopez",
};

const person3 = {
  id: 333,
  givenName: "Antony Hopkings",
};

const person4 = {
  id: 4444,
  givenName: "Stefen king",
};

router.get("/search-movies", (req, res) => {
  return res.json([
    {
      id: "1111111",
      name: "Perceo",
      actors: [person1, person2],
      director: person1,
      duration: "1:34",
      thumbnailUrl: "https://image.tmdb.org/t/p/w185/jfDxr9uDIOK5QZDsO76Y7ATs0kF.jpg?x25295",      
    },
    {
      id: "222222",
      name: "Troya",
      actors: [person1],
      director: person4,
      duration: "2:34",
      thumbnailUrl: "https://image.tmdb.org/t/p/w185/wDEse2TQRiyfhdlusSXBdkDOQRj.jpg?x25295",      
    },
    {
      id: "3333333",
      name: "Titans of apocalipse",
      actors: [person3, person2, person1],
      director: person4,
      duration: "2:04",
      thumbnailUrl: "https://image.tmdb.org/t/p/w185/oapxWncDc5ztrge3ycpvaZIMcf3.jpg?x25295",      
    },
  ]);
});

module.exports = router;
