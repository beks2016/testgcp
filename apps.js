const express = require('express');
const { Storage } = require('@google-cloud/storage');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const storage = new Storage();
const bucketName = process.env.BUCKET_NAME;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/upload', async (req, res) => {
  const fileContent = req.body.file_content;
  const bucket = storage.bucket(bucketName);
  const file = bucket.file('uploaded_file.txt');

  await file.save(fileContent);
  res.send('File uploaded!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
