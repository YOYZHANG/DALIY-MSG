const {resolve}  = require('path');
const { existsSync, lstatSync, readdirSync } = require('fs');

function readFileList(year, month) {
    const fileList = [];
    const dirPath = resolve(`./docs/${year}/${month}`);
    const isDir = existsSync(dirPath) && lstatSync(dirPath).isDirectory();
    if (!isDir) {
        return fileList;
    }

    const files = readdirSync(dirPath);
    files.forEach(element => {
        const currentFile = element.slice(0, 2);
        fileList.push([
            `/${year}/${month}/${currentFile}`,
            `${year}年${month}月${currentFile}日`
        ])
    });

    return fileList.reverse();
}

module.exports = readFileList;