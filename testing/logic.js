var a = "hello 2 times  ";
var spaceCount = (a.split(" ").length - 1);
var b = a.length - spaceCount;
function countWords(str) {
    return str.trim().split(/\s+/).length;
}
var c = countWords(a);
var d = a.replace(/\s|[0-9]/g, '').split('').sort();
var op = [];

function count(arr) {
    var n = arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
    return Object.entries(n).map(([k, v]) => ({ [k]: v }));

}
var result = {
    "textLength": { "withSpaces": a.length, "withoutSpaces": b },
    "wordCount": c,
    "characterCount": count(d)
}
