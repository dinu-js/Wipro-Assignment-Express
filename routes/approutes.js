'use strict';

var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');
const fileName = 'data.txt';
const filePath = path.join(__dirname, '../public/', fileName);
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './uploads');
    },
    filename: function(req, file, callback) {
        callback(null, file.originalname);
    }
});
var upload = multer({
    storage: storage
}).single('filetoupload');

/**
 * function to find first non-repeating character in the input string
 *
 * @param {String} string
 * @return {Object}
 * 
 */
function firstNonRepeatedCharacter(string) {
    for (var i = 0; i < string.length; i++) {
        var c = string.charAt(i);
        if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
            return c;
        }
    }
    return null;
}

/* Default server. */
router.get('/', function(req, res, next) {
    res.send('Use one of the apis from README.md file');
});

/**
 * To expose /file api for downloading a file from server
 *
 * @param {Sring} string
 * @return callback
 * 
 */
router.get('/file', function(req, res, next) {
    fs.exists(filePath, function(exists) {
        if (exists) {
            res.set({
                "Content-Type": "application/octet-stream",
                "Content-Disposition": "attachment; filename=" + fileName
            });
            res.status(200);
            res.sendFile(filePath);
        } else {
            res.set({
                "Content-Type": "application/json"
            });
            res.status(400);
            res.json({
                "Error": "No FILE present"
            });
        }
    });
});

/**
 * To expose /product api for finding a product of given url params - param1 & param2
 *
 * @param {Sring} string
 * @return callback
 * 
 */
router.get('/product', function(req, res, next) {

    if (req.query.param1 && req.query.param2) {
        var result = req.query.param1 * req.query.param2;
        res.set({
            "Content-Type": "application/json"
        });
        res.status(200);
        res.json({
            "Product": result
        });
    } else {
        res.status(400);
        res.set({
            "Content-Type": "application/json"
        });
        res.json({
            "Error": "param1 & param2 required for product"
        });
    }
});

/**
 * To expose /repeating api to find the first non-repeating char in the given param - input 
 *
 * @param {Sring} string
 * @return callback
 * 
 */
router.get('/repeating', function(req, res, next) {
    if (req.query.input) {
        var char = firstNonRepeatedCharacter(req.query.input);
        res.set({
            "Content-Type": "application/json"
        });
        res.status(200);
        res.json({
            "FirstNonRepeatingCharacter": char
        });
    } else {
        res.set({
            "Content-Type": "application/json"
        });
        res.status(400);
        res.json({
            "Error": "Input param required for processing"
        });
    }
});

/**
 * To expose /upload api to serve upload page to upload a file to the server
 *
 * @param {Sring} string
 * @return callback
 * 
 */
router.get('/upload', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/', "upload.html"));
});

/**
 * To expose /fileupload api to upload a file to the server
 *
 * @param {Sring} string
 * @return callback
 * 
 */
router.post('/fileupload', upload, (req, res) => {
    res.status(200);
    res.set({
        "Content-Type": "application/json"
    });
    res.json({
        "Success": "File uploaded successfully"
    });
});

module.exports = router;