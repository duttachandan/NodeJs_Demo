const Person = require("../schema/Person");
const dummyData = require("./dummyData");
const MongoConnect = require("../db/MongoConnect");

MongoConnect();

const dataInsert = async () => {
//   await Person.deleteMany({});
  await Person.insertMany(dummyData.data);
};

dataInsert();
