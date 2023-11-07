// fibonacci series has starting element 0 and 1 and then it will give the next element by sum of previous 2 elements and then.

// fib = [0,1,1,2,3,5,8,13,21]
// f(n) = f(n-1) + f(n-2), n>1;

var fib = function (n) {
    const arr = [0, 1];
  
    for (let i = 2; i <= n; i++) {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  
    return arr[n];
};
fib(5);

// recursive approach

const fib1 = function(n){
    if(n<= 1) return n;

    return fib1(n-1) + fib1(n-2);
};
fib1(5);