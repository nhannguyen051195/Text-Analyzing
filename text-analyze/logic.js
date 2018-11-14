function spaceCount(str) {
    return (str.split(" ").length - 1);
}
function withoutSpaceCount(str) {
    return str.length - spaceCount(str);
}
function countWords(str) {
    return str.split(' ')
        .filter(function (n) { return n != '' })
        .length;
}
function count(str) {
    if(str==="")
    return [];
    else
    {var a = str.toLowerCase()
    var patt1 = /[A-Za-z]/gi;
    var result = a.match(patt1).sort();
    var n = result.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
    return Object.entries(n).map(([k, v]) => ({ [k]: v }));}
}
module.exports = {
    spaceCount,
    withoutSpaceCount,
    countWords,
    count
}