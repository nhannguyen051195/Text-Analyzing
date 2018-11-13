function spaceCount(str) {
    return (str.split(" ").length - 1);
}
function withoutSpaceCount(str){ 
    return str.length - spaceCount(str);
}
function countWords(str) {
    return str.trim().split(/\s+/).length;
}
function count(str) {
    var arr = str.replace(/\s|[0-9]/g, '').split('').sort();
    var n = arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
    return Object.entries(n).map(([k, v]) => ({ [k]: v }));
}
module.exports = {
    spaceCount,
    withoutSpaceCount,
    countWords,
    count
}