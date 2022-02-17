const { json } = require("express/lib/response");
const { readFileSync } = require("fs");
var load = () => JSON.parse(readFileSync('name.json'));


function filewriter() {
    const fs = require('fs')
    const jsonFile = require("./name.json")

    var newdata = {
        "Eid":"001",
        "name": "Adarsh kumar",
        "email": "ada1@gmail.com",
        "phone": "9538130466",
        "testcases":3,
        "Experience":2,
        "salary": 20000
    }
    jsonFile.push(newdata)

    fs.writeFile('/name.json',JSON.stringify(jsonFile),err => {
        if (err) throw err;
        console.log("Written");
    })
}

module.exports = { load };
module.exports.filewriter = filewriter;