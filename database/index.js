const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://toyin:shevi234@cluster0.vllbaod.mongodb.net/test", {
    useNewUrlParser: true,
  })
  .catch((e) => {
    console.error("connection error", e.message);
  });
