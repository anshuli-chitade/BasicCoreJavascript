const read = require("readline-sync")
var username = read.question("May i have your name:")
var len = username.length;

if (username != null && len > 3) {
    console.log(username.replace(username, 'Hello ' + username + ' how are you?'));
} else {
    console.log("username must be between 4-8 characters or check it may be blank")
}

