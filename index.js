const preparation = require('./preparation');
const folderPath = __dirname+'/25-users/';
const labFolder = __dirname + '/labels/';
const labValues = preparation.readLab(labFolder);
// console.log(labValues);
preparation.readFolder(folderPath, labValues);
// const fs = require('fs');
// fs.readFile('./labels/Abhishek_1.lab', function(err, data) {
//     if(err) throw err;
//     console.log(data.toString());
// });
// const v = fs.readFileSync('./labels/Mohit_11.lab').toString();
// console.log(v);
