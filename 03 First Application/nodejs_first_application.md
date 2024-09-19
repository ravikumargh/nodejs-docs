When learning a new language or a framework, the first application to write is a Hello World program. Such a program displays the Hello World message. In this chapter, we shall write a Hello World application in Node.js.



# Example of Node.js Application

## Console Application
Node.js has a command-line interface. Node.js runtime also allows you to execute JavaScript code outside the browser. Hence, any JavaScript code can be run in a command terminal with Node.js executable.

Save the following single line JavaScript as hello.js file.
```
console.log("Hello World");
```
Open a powershell (or command prompt) terminal in the folder in which hello.js file is present, and enter the following command −
```
PS D:\nodejs> node hello.js
Hello World
```
The Hello World message is displayed in the terminal.

## Web Application
To create a "Hello, World!" web application using Node.js, save the following code as hello-http.js:
```
http = require('node:http');
listener = function (request, response) {
  // Send the HTTP header
  // HTTP Status: 200 : OK
  // Content Type: text/html
  response.writeHead(200, {'Content-Type': 'text/html'});

  // Send the response body as "Hello World"
  response.end('<h2 style="text-align: center;">Hello World</h2>');
};

server = http.createServer(listener);
server.listen(3000);

// Console will print the message
console.log('Server running at http://127.0.0.1:3000/');
```
Run the above script from command line.
```
C:\nodejs> node hello-http.js
Server running at http://127.0.0.1:3000/
```
