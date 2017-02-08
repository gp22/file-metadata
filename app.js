/*
File Metadata Microservice

Deployed to: `https://gp22-filemetadata.herokuapp.com/`

This simple service let's you submit form data that includes a
file upload. When you submit a file, you will receive the filesize in
bytes in the JSON response.
*/
'use strict';

const express = require('express');
const multer = require('multer');
const app = express();
const upload = multer();

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('home'));

app.post('/file-upload', upload.single('upload'), (req, res) => {
    const response = {
        "size": req.file.size
    }
    res.send(response);
});

// use process.env.PORT for compatibility with heroku
app.listen(process.env.PORT || 3000, () => console.log('Server started'));