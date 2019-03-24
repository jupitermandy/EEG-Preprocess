const fs = require('fs');
const { convertArrayToCSV } = require('convert-array-to-csv');

const readFolder = (folderPath, labValues) =>{
    fs.readdir(folderPath, function(err, files) {
        if(err) throw err;
        files.filter(e => e.includes('txt')).forEach(function(e) {
            const fileName = e.split('.')[0].split('_');
           const productNumber = Number.parseInt(fileName[fileName.length - 1]);
           const filePath = folderPath + e;
           const lab = labValues[e.slice(0, -4)];
           readLines(filePath, lab, productNumber);
        });
    });
}

const readLines = (path, lab, productNumber) => {
    
    fs.readFile(path, function(err, data) {
        if(err) throw err;
        let array = data.toString().split("\n");
        array = array.filter(e => e.length > 0).map(item => {
            return item.split(" ").map(e => {
                const result = parseFloat(e);
                return result;
            });
        });
        // average 
        const value =  averageColumn(array);
        fs.appendFile('result4.txt', (value.map(e => parseFloat(e).toFixed(6)).join(' ') + ' ' + lab + ' ' + productNumber + '\n'), function(err) {
            if (err) throw err;
        });
    });
}

const averageColumn = (array) => {
    return array[0].map((col, i) => array.map(row => row[i]).reduce((acc, c) => acc + c, 0) / array.length);
}

const readLab = (folderPath) => {
    let labValues = [];
    fs.readdirSync(folderPath).forEach(file => {
        if(file.includes('lab')) {
            const filePath = folderPath + file;
            const lab = fs.readFileSync(filePath).toString();
            labValues[file.slice(0, -4)] = lab === 'Disike'? 2 : 1;
            if(!labValues[file.slice(0, -4)]) {
                console.log(file);
                console.log(lab);
            }
        }
    });

    return labValues;
}

module.exports = {
    readFolder,
    readLines,
    averageColumn,
    readLab
}
/*
const folderPath = __dirname+'/25-users/';
//readFolder(folderPath);
const path = __dirname+'/25-users/Abhishek_2.txt';
readLines(path);
*/
