/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// import {onRequest} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


const functions = require("firebase-functions");
const express = require("express");
const { join } = require("path");
const { readFileSync } = require("fs");

// Load the Angular SSR build
const app = express();
const distFolder = join(process.cwd(), "dist/server");
const indexHtml = readFileSync(join(distFolder, "index.html")).toString();

app.get("*", (req: any, res: any) => {
  res.status(200).send(indexHtml);
});

exports.ssrFunction = functions.https.onRequest(app);
