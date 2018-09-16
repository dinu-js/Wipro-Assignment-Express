## Programming Assignment for Project Opportunity (Express.js Solution)

1 - Write a Nodejs server that listens on port 3001 and outputs a file content from any local directory

2 - Write a Nodejs server that serves as a RESTFUL API that takes two parameters in a GET call and produces their product.
 
3 - Write a Nodejs server that serves as a RESTFUL  API that accepts a String as an input name and returns the first non-repeating character in the String

4 - Write a Nodejs server that serves as a RESTFUL  API that accepts a file content and writes them to the disk.

## Quick Start

1 - Checkout the project
2 - npm install (From the project directory)
3 - npm start (To start the server)

## Author

Dinesh Rawat - 321479 - dinesh.rawat1@wipro.com

## API's

1 - http://localhost:3001 (Main Dummy Page)
2 - http://localhost:3001/app/file (to fetch a file from server)
3 - http://localhost:3001/app/product?param1=5&param2=10 (to find product of param1 and param2)
4 - http://localhost:3001/app/repeating?input=aabbyhhj (to first non repeating character in given input)
5 - http://localhost:3001/app/upload (to upload a file to server)
    -> click choose a file button on browser
    -> click on submit
    -> if uploaded successfully message appears, file can be found in ./uploads folder of project directory


## Tools

All api's can be tested using the browser itself.
POSTMAN can also be used except for upload file api.