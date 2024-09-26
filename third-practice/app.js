const express = require("express");
const app = express();
const userModule = require("./models/user");
const mongooseconnection = require("./config/mongoose");
// Mongoose connection handles the database connection
const debuglog = require("debug")("development:app");

app.get("/", (req, res) => {
  res.send(`<h1>Hulle</h1>`);
});
/*
app.get("/create", async (req, res, next) => {
  let user1 = await userModule.create({
    username: "ojass12313",
    name: "oajs",
    email: "oajsdasdasd@aemkkafsfm",
    password: "HULLE HULLA RE HULLE HULLE HULEL",
  });
  debuglog(`user created : ${user1}`);
  res.send(`User created succesfully`);
});
*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/create", async (req, res) => {
  let userCreated = await userModule.create({
    username: "oajsdasodj123123132",
    name: "ojas",
    email: "ojasdsada@gai.com",
    password: "asdjasdpadsk",
  });
  debuglog(`User created`);
  res.send(userCreated);
});
app.get("/create/:number", async (req, res) => {
  let userCreated = await userModule.create({
    username: "harsha",
    name: "harsh",
    email: "harsh@gai.com",
    password: "asdjasdpadsk",
  });
  debuglog(`User created`);
  res.send(userCreated);
});
app.get("/create/:number", async (req, res) => {
  let userCreated = await userModule.create({
    username: "harsha",
    name: "hharsh",
    email: "harsh@gai.com",
    password: "asdjasdpadsk",
  });
  debuglog(`User created`);
  res.send(userCreated);
});
app.get("/read", async function (req, res, next) {
  let userCheck = await userModule.find();
  debuglog("readed");
  res.send(userCheck);
});
app.get("/update", async (req, res, next) => {
  let userUpdate = await userModule.findOneAndUpdate(
    { name: "hharsh" },
    { name: "amit" },
    { new: true }
  );
  debuglog("updated succesfully");
  res.send(userUpdate);
});
app.get("/delete", async (req, res, next) => {
  let userDel = await userModule.findOneAndDelete({ name: "amit" });
  // console.log(userDel);
  res.send(userDel);
});
/*
app.post("/create", async (req, res, next) => {
  // res.send(req.body);
  let { name, username, email, password } = await req.body;
  let createdUser1 = userModule.create({
    name,
    username,
    email
    password,
  });
  res.send(createdUser1);
});
*/
app.post("/create", async (req, res, next) => {
  let { name, username, email, password } = await req.body;
  let userCreated1 = userModule.create({
    name,
    username,
    email,
    password,
  });
  res.send(userCreated1);
});
app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
