const util = require("util");
const fetch = require('node-fetch');
const { UserNotFound } = require('./erorrs');

function getUsernameUrl(user) {
    return util.format('https://api.github.com/users/%s', user);
}

function getUserReposUrl(user) {
    return util.format('https://api.github.com/users/%s/repos', user);
}

async function getUserName(user) {
    try {

        const response = await fetch(getUsernameUrl(user));

        if (!response.ok) {
            throw new UserNotFound(user);
        }
    
        const { name } =  await response.json();

        return name;

    } catch (e) {

        return e;

    }
}

async function getUserRepos(user) {
    try {

        const response = await fetch(getUserReposUrl(user));

        if (!response.ok) {
            throw new UserNotFound(user);
        }
    
        const json =  await response.json();

        return json.length;

    } catch (e) {

        return e;

    }    
}

async function getUserGit(user) {
    const username = await getUserName(user);
    const repos = await getUserRepos(user);
    return { username, repos };
}

module.exports = {
    getUserGit,
    
}
