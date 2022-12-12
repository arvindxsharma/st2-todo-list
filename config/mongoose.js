const mongoose = require("mongoose");
const config = {
  useNewUrlParser: true,
};
mongoose.connect(
  'mongodb://localhost:27017/todo-list',
  config,
  (err) => {
    if (err) {
      console.log("error in connecting to mongoose", err);
      return;
    }
    console.log("connected to mongoose");
  }
);
