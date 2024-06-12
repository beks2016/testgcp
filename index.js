const express = require('express');
const { Storage } = require('@google-cloud/storage');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const storage = new Storage();
const bucketName = "pmu_test";

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

app.post('/upload', async (req, res) => {
  const fileContent = req.body.file_content;
  const bucket = storage.bucket(bucketName);
  const file = bucket.file('uploaded_file.txt');

  await file.save(fileContent);
  res.send('File uploaded!');
});

app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
