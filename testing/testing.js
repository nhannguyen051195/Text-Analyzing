const express = require('express');
const router = express.Router();
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request'
    })
});



router.post('/', (req, res, next) => {
    const a = {
        text: req.body.text
    };
    var spaceCount = (a.text.split(" ").length - 1);
    var b = a.text.length - spaceCount;
    function countWords(str) {
        return str.trim().split(/\s+/).length;
    }
    var c = countWords(a.text);
    var d = a.text.replace(/\s|[0-9]/g, '').split('').sort();
    var op = [];

    function count(arr) {
        var n = arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
        return Object.entries(n).map(([k, v]) => ({ [k]: v }));

    }
    var result = {
        "textLength": { "withSpaces": a.text.length, "withoutSpaces": b },
        "wordCount": c,
        "characterCount": count(d)
    }
    res.status(200).json({
        result
    })
});
module.exports = router;
