const { connect } = require("mongoose");

const mongoURL =
  "mongodb+srv://superUser:qwerty123456.@cluster0.hgrktbo.mongodb.net/?retryWrites=true&w=majority";

connect(mongoURL, { dbName: "database" })
  .then(() => console.log("MongoDb connected"))
  .catch((err) => console.log(err.message));
