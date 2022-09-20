const { connect } = require("mongoose");

const { mongoURL } = require("./config");

connect(mongoURL, { dbName: "database" })
  .then(() => console.log("MongoDb connected"))
  .catch((err) => console.log(err.message));
