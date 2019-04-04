// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// using SQLite3
// let's import the SQLite3 module
const sqlite3 = require('sqlite3')

// let's create a new database locally
var db = new sqlite3.Database('file.db')

// 
db.serialize(() => {
    db.run("CREATE TABLE Trial (name, barcode, quantity)");
  
    db.run("INSERT INTO Trial VALUES (?, ?, ?)", ['product001', 'xxxxx', 20]);
    db.run("INSERT INTO Trial VALUES (?, ?, ?)", ['product002', 'xxxxx', 40]);
    db.run("INSERT INTO Trial VALUES (?, ?, ?)", ['product003', 'xxxxx', 60]);
  
    db.each("SELECT * FROM Trial", (err, row) => {
        if(err){
            console.log('There was error with the operation')
        }

        console.log(row);
    });
});

db.close()