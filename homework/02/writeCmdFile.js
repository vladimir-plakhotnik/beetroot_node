const fs = require('fs');
const path = require('path');
const { argv, stdout, exit } = process;

const colors = {
    red: "\x1b[41m",
    green: "\x1b[32m",
    reset: "\x1b[0m",
}

const extensions = [".txt", ".html"];

function warning(message, abort = true) {
    stdout.write(`\n${colors.red}${message}${colors.reset}\n`);
    if(abort) {
        exit(1);
    }
}

function message(message, abort = true) {
    stdout.write(`\n${colors.green}${message}${colors.reset}\n`);
    if(abort) {
        exit(0);
    }    
}

function check(message, condition) {
    if(!condition()) {
        warning(message);        
    }
}

async function writeFile(filename, content) {
    await new Promise((resolve, reject) => {
        fs.writeFile(filename, `${content}\n`, err => {
            if(err) {
                reject(err);
            } else {
                resolve();
            }             
        });
    });
}

async function appendFile(filename, content) {
    await new Promise((resolve, reject) => {
        fs.appendFile(filename, `${content}\n`, err => {
            if(err) {
                reject(err);
            } else {
                resolve();
            }             
        });
    });
}

async function checkIfFileExists(filename) {
    return new Promise((resolve, reject) => {
        fs.stat(filename, (err, stats) => {
            if(err) {
                if (err.code === "ENOENT") {
                    resolve(false);
                } else {
                    reject(err);
                }                
            } else {
                resolve(true);
            }            
        });
    });
}


async function runAsModule() {

    check("Parameter '-f' is missing or wrang!", () => argv[2] === "-f");
    check("Filename is missing!", () => argv[3]);
    check(`File extension '${path.extname(argv[3])}' does not supported!`, () => extensions.includes(path.extname(argv[3])));
    check("Parameter '-c' is missing or wrang!", () => argv[4] === "-c");
    check("Content is missing!", () => argv[5]);

    try {
        await writeCmdFile(argv[3], argv[5]);
        message(`Content has been successfully appended to '${argv[3]}'`);
    } catch(e) {
        warning(e);
    }

}

async function writeCmdFile(filename, content) {
    if(!filename) {
        throw new Error("Filename is missing!");
    }
    if(!content) {
        throw new Error("Content is missing!");
    }
    if(!extensions.includes(path.extname(filename))) {
        throw new Error(`File extension '${path.extname(filename)}' does not supported!`);
    }
    await checkIfFileExists(filename) ? 
        await appendFile(filename, content) :  
        await writeFile(filename, content);
}

if (module.parent) {
    exports.writeCmdFile = writeCmdFile;
} else {
    runAsModule();
}

