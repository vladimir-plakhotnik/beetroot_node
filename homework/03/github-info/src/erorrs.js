class UserNotFound extends Error {
    constructor(username) {
        super(`Username "${username}" does not found.`);
    }
}

module.exports = {
    UserNotFound,
}
