# Code Debugging
Programming code might contain syntax errors, or logical errors.

Many of these errors are difficult to diagnose.

Often, when programming code contains errors, nothing will happen. There are no error messages, and you will get no indications where to search for errors.

Searching for (and fixing) errors in programming code is called code debugging.

## JavaScript Debuggers
Debugging is not easy. But fortunately, all modern browsers have a built-in JavaScript debugger.

Built-in debuggers can be turned on and off, forcing errors to be reported to the user.

With a debugger, you can also set breakpoints (places where code execution can be stopped), and examine variables while the code is executing.

Normally (otherwise follow the steps at the bottom of this page), you activate debugging in your browser with the F12 key, and select "Console" in the debugger menu.

## Example
Consider a simple Node.js code as given below (main.js) 
```
let marks = [34, 45, 98, 26, 51];
let total = 0;
for (let i = 0; i <= marks.length; i++) {
   total += marks[i];
}
var no = marks.length;
console.log(total/no);
```
We expect that the above program calculates the average marks obtained by 5 students. However, the result is not what we expect, when we run it as follows
```
PS D:\nodejs> node main.js
NaN
```
In JavaScript, NaN means Not a Number. To trace this error, let’s use the Node.js debugger. Instead, run the program with the following command −
```
PS D:\nodejs> node inspect main.js
< Debugger listening on ws://127.0.0.1:9229/ca4aece6-308a-4979-8a32-734fe8ebbd0b
< For help, see: https://nodejs.org/en/docs/inspector
<
connecting to 127.0.0.1:9229 ... ok
< Debugger attached.
<
Break on start in a.js:1
> 1 let marks = [34, 45, 98, 26, 51];
  2
  3 let total = 0;
debug>
```

## The console.log() Method
If your browser supports debugging, you can use console.log() to display JavaScript values in the debugger window.

## Setting Breakpoints
In the debugger window, you can set breakpoints in the JavaScript code.

At each breakpoint, JavaScript will stop executing, and let you examine JavaScript values.

After examining values, you can resume the execution of code (typically with a play button).

## The debugger Keyword
The debugger keyword stops the execution of JavaScript, and calls (if available) the debugging function.

This has the same function as setting a breakpoint in the debugger.

If no debugging is available, the debugger statement has no effect.

With the debugger turned on, this code will stop executing before it executes the third line.
### Example
```
let x = 15 * 5;
debugger;
document.getElementById("demo").innerHTML = x;
```

## Major Browsers' Debugging Tools
Normally, you activate debugging in your browser with F12, and select "Console" in the debugger menu
Otherwise follow these steps:

### Chrome
* Open the browser.
* From the menu, select "More tools".
* From tools, choose "Developer tools".
* Finally, select Console.