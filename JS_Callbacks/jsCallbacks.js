function myDisplayer01(some) {
  console.log(some);
    // document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator01(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }
  
  let result = myCalculator01(5, 5);
  myDisplayer01(result);


  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  function myDisplayer02(some) {
    console.log(some);
    // document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator02(num1, num2) {
    let sum = num1 + num2;
    myDisplayer02(sum);
  }
  
  myCalculator02(5, 5);
 //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  function myDisplayer03(some) {
    console.log(some);
    // document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator03(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator03(5, 5, myDisplayer03);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


//Synchronous callback functions
//Synchronous code executes from top to bottom and does so immediately.

let numbers = [1, 2, 4, 7, 3, 5, 6];
numbers.sort((a, b) => a - b);
console.log(numbers); // [ 1, 2, 3, 4, 5, 6, 7 ]
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//Asynchronous callback functions
console.log('1')

setTimeout(function afterTwoSeconds() {
  console.log('2')
}, 2000)

console.log('3')

// This will log “1 3 2” since the “2” is on a setTimeout which will only execute after two seconds. 
// The application does not stop waiting for the two seconds to finish. 
// Instead, it keeps executing the rest of the code and when the timeout is finished it returns to afterTwoSeconds.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//Asynchronous callback functions
setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo1").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}

//In the previous example, myFunction is used as a callback.
//The function is passed to setInterval() as an argument.
//1000 is the number of milliseconds between intervals, so myFunction() will be called every second.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function myDisplayer(some) {
  document.getElementById("demo2").innerHTML = some;
}

function getFile(myCallback) {
  let req = new XMLHttpRequest();
  req.open('GET', "myCar.html");
  req.onload = function() {
    if (req.status == 200) {
      myCallback(this.responseText);
    } else {
      myCallback("Error: " + req.status);
    }
  }
  req.send();
}

getFile(myDisplayer); 
