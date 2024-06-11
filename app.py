from flask import Flask, request
from google.cloud import storage
import os

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/upload', methods=['POST'])
def upload_file():
    bucket_name = 'YOUR_BUCKET_NAME'
    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob('uploaded_file.txt')

    file_content = request.form['file_content']
    blob.upload_from_string(file_content)

    return 'File uploaded!'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
