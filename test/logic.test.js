const assert = require('assert');
const {spaceCount, withoutSpaceCount, countWords, count} = require('../text-analyze/logic');

it('should return 0 spaces count with "hi" input', () => {
    let spaces = spaceCount("hi");
    assert.equal(spaces, 0);
});
it('should return 10 withoutSpaceCount with "hi" input', () => {
    let spaces = withoutSpaceCount("hi");
    assert.equal(spaces, 2);
});
it('should return 1 countWords with "hi" input', () => {
    let spaces = countWords("hi");
    assert.equal(spaces, 1);
});
it('should return [{"h": 1}, {"i": 1}] count with "hi" input', () => {
    let spaces = count("hi");
    assert(spaces, [{"h": 1}, {"i": 1}]);
}); 