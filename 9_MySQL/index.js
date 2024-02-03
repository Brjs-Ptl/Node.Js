
// http://localhost/dashboard/


const mysql = require("mysql");

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test"
});

connection.connect((err) => {
    if (err) {
        console.log("error");
    } else {
        console.log("connected");
    }
}); 

connection.query("select * from users", (err, result) => {
    console.log("Result", result);
})