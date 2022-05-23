const express = require("express");
const bodyParser = require("body-parser");

const locationRoutes = require("./routes/location");
const usersRoutes = require("./routes/users");
const profileRoutes = require("./routes/profile");

const dogsRoutes = require("./routes/dogs");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// app.set('view engine', 'ejs');
// app.set('views', 'views');

app.use(bodyParser.json());

app.use(locationRoutes);
app.use(usersRoutes);
app.use(profileRoutes);

app.use(dogsRoutes);

// app.use((req, res, next) => {
//   res.setHeader('Content-Type', 'text/html');
//   next();
// });

// app.use((req, res, next) => {
//   const userName = req.body.username || 'Unknown User';
//   res.render('index', {
//     user: userName
//   });
// });

app.listen(3000);
