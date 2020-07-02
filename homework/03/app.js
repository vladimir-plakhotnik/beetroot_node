const { getUserGit } = require("./github-info");

(async () => {
    console.log(await getUserGit('kentcdodds'))
 })();
