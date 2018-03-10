var min = function(a, b) {
  if (a>b) {
    return b;
  }
  else {
    return a;
  }
};

var isEven = function(n) {
  if (n == 1) {
    return false;
  }
  if else (n == 0) {
    return true;
  }
  if else (n < 0) {
    return isEven(n+2);
  }
  else {
    return isEven(n-2);
  }
};

var countChar = function(string, char) {
  let num = 0;
  for (let i=0; i<string.length; i++) {
    if (string[i] === char) {
      num++;
    }
  }
  return num;
};

var countBs = function(string) {
  return countChar(string, 'B');
}
