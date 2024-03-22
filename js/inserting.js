let oldString='hello world';
let insert='welcome to ';
let index=6;
let newString=oldString.slice(0,index)+insert+oldString.substring(index);
console.log(newString);