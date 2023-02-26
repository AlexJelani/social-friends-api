const functions = require("firebase-functions");
const express = require("express");
const jsonServer = require("json-server");
// const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 3000;
const admin = require("firebase-admin");
admin.initializeApp();

const app = express();

app.use(middlewares);
app.use(router);

app.get("/", (req, res) => {
  res.status(200).send({ data: "wordly hellos" });
});

exports.app = functions.https.onRequest(app);
// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });