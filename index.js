var mysql = require("mysql");
var inquirer = require("inquirer");
​
// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
​
  // Your port; if not 3306
  port: 3306,
​
  // Your username
  user: "root",
​
  // Your password
  password: "",
  database: "greatBay_DB"
});
​
// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});
​
// function which prompts the user for what action they should take
function start() {
​   inquirer
        .prompt([
            {
            type: "list",
            name: "choices",
            message: "Would you like to bid on an item or post an item?",
            choices: ["BID", "POST"]
            },
        ])
        .then(function (response) {
            if (response.choices === "POST") {
                postAuction();
            } else (response.choices === "BID") {
                bidAuction();
            }
        }) 
}
​
// function to handle posting new items up for auction
function postAuction() {
  // prompt for info about the item being put up for auction
​   inquirer
        .prompt([
            {
              type: "input",
              name: "item",
              message: "What are you selling?"
            },
            {
              type: "input",
              name: "price",
              message: "What is your starting bid?"
            },
        ])
        .then(function (response) {
          //create query for database
        })
}
​
function bidAuction() {
  // query the database for all items being auctioned
​   
}