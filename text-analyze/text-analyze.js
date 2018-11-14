const express = require('express');
const router = express.Router();
const {spaceCount, withoutSpaceCount, countWords, count} = require('./logic');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request'
    })
});

router.post('/', (req, res, next) => {
    const text = req.body.text
    /* var result = {
        "textLength": { "withSpaces": text.length, "withoutSpaces": withoutSpaceCount(text) },
        "wordCount": countWords(text),
        "characterCount": count(text)
    } */
    res.status(200).json({
        "textLength": { "withSpaces": text.length, "withoutSpaces": withoutSpaceCount(text) },
        "wordCount": countWords(text),
        "characterCount": count(text)
    })
});
module.exports = router;
