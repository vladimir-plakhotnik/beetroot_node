const { writeCmdFile } = require('./writeCmdFile');

(async function test() {
    await writeCmdFile("test.txt", "This is the test 1");
    await writeCmdFile("test.txt", "This is the test 2");
    await writeCmdFile("test.txt", "This is the test 3");
})();
