const mongoose = require("mongoose");
const dotenv = require("dotenv");

//Handling Uncaught Exceptions
process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  process.exit(1);
});

//Get access to config.env
dotenv.config({ path: "./config.env" });

const app = require("./app");

//Connect to Database (mongoDB)
const DB = process.env.DATABASE;
mongoose
  .connect(DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Database");
  });
//.catch((err) => {
//  console.log(err);
//});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log("Listening at port 3000..");
});

//Handling Unhandled Promise Rejections
process.on("unhandledRejection", (err) => {
  //console.log(err.name, err.message);
  console.log("Unhandled Rejection 💥app shutting down");
  server.close(() => {
    process.exit(1);
  });
});
