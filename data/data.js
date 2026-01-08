const models = require("../app/models/BlogSchema");
const dummyData = require("./dummyData");
const MongoConnect = require("../app/config/MongoConnect");

MongoConnect();

const dataInsert = async () => {
  await models.deleteMany({});
  // await models.insertMany(dummyData.data);
};

dataInsert();
