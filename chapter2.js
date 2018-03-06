var triangle = function() {
  let str = '#';
  for (let i = 0; i<7; i++) {
    console.log(str);
    str += '#';
  }
}

var fizzBuzz = function() {
  for (let i=1; i<=100; i++) {
    let output = '';
    if (i%3 == 0) {
      output = "Fizz";
    }
    if (i%5 == 0) {
      output += "Buzz";
    }
    if (output === "") {
      output = i;
    }
    console.log(output);
  }
}
