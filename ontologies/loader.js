const 
    { promisify } = require('util'),
    { join: joinPath } = require('path'),
    fs = require('fs'),
    readFile = promisify(fs.readFile),
    writeFile = promisify(fs.writeFile),
    fetch = require('node-fetch'),
    assert = require('assert'),
    ontologies = require('./ontologies.json');

exports.download = async function (name, url) {

    const response = await fetch(url, {
        method: 'get',
        headers: {
            'Accept': 'text/turtle'
        }
    });

    assert(response.ok, `[${response.status}] ${response.statusText}`);

    const file = await response.text();
    await writeFile(joinPath(__dirname, `${name}.ttl`), file);

};

switch(process.argv[3]) {

    case "download":
        for(let [name, url] of Object.entries(ontologies)) {
            exports.download(name, url);
        }
        break;

}