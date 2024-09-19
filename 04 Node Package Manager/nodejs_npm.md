NPM − an acronym for Node Package Manager, refers to the Command line utility to install Node.js packages, perform version management and dependency management of Node.js packages. It also provides an online repository for node.js packages/modules which are searchable on https://www.npmjs.com/. A detailed documentation of NPM commands is also available on this link.

If you are working with newer versions of Node.js (version 0.6.0 or later), the NPM utility is included with the Node.js binaries for all the OS platform bundles. Check the version of NPM in the command terminal −

```
PS C:\Users\mlath> npm -v
10.8.3
```

## Install Package Locally
There is a simple syntax to install any Node.js module −
```
npm install <Module Name>
```
For example, following is the command to install a famous Node.js web framework module called express −
```
npm install express
```
Now you can use this module in your js file as following −
```
var express = require('express');
```
The local mode installation of a package refers to the package installation in node_modules directory lying in the folder where Node application is present. Locally deployed packages are accessible via require() method. Use --save at the end of the install command to add dependency entry into package.json of your application.

The package.json file is a JSON file that is used to manage dependencies in Node.js projects. It contains information about the project, such as its name, version, and dependencies. The package.json file is used by the npm package manager to install and manage dependencies.

The package.json file is typically located in the root directory of a Node.js project. It can be created by running the npm init command.

Create a new folder for a new Node.js project, and run pnm init command inside it −
```
PS D:\nodejs\newnodeapp> npm init
```
This utility will walk you through creating a package.json file.
```
{
   "name": "newnodeapp",
   "version": "1.0.0",
   "description": "Test Node.js App",
   "main": "index.js",
   "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
   },
   "keywords": [
      "test",
      "nodejs"
   ],
   "author": "mvl",
   "license": "ISC"
}
```

Now, if we install express package into this package locally in this project, use the following command, it also adds dependency entry into the package.json.
```
D:\nodejs\newnodeapp>npm install express –save
```
The package.json file in this folder will be updated to −
```
{
   "name": "newnodeapp",
   "version": "1.0.0",
   "description": "Test Node.js App",
   "main": "index.js",
   "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
   },
   "keywords": [
      "test",
      "nodejs"
   ],
   "author": "mvl",
   "license": "ISC",
   "dependencies": {
      "express": "^4.18.2"
   }
}
```
The express package code will be placed inside the node_modules subfolder of the package folder.

If you have already placed all the project dependencies in your package.json file, all of them will be installed at once by simply running npm install (without any package name in front of it)

You can also use -save-dev flag in the npm install command to add the package as DevDepndency.

# Install Package Globally
NPM can also install packages globally so that all the node.js application on that computer can import and use the installed packages.
Apply -g in the install command to install package globally. For example, the following command will install ExpressJS globally.
```
C:\MyNodeProj> npm install -g express
```