// https://www.codewars.com/kata/5a8bcd980025e99381000099/train/javascript
// Given an integer n greater than or equal to 0, create and return an array with the following pattern:

// squareUp(3) => [0, 0, 1, 0, 2, 1, 3, 2, 1]
// squareUp(2) => [0, 1, 2, 1]
// squareUp(4) => [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]

// 0 <= n <= 1000.


function squareUp(n)
{
  let arr= [];
  for(let i=0; i<=n; ++i){
     arr.push(i);
}
    return arr;
}


// Solution I like
// I like it because it is flexible and can generate square patterns of any size n. It adapts dynamically to the input size. And also it is concise and easy to read.
function squareUp(n) {

  let res = [];

  for (let i = 1; i <= n; i++)
    for (let j = n; j >= 1; j--)
      res.push(j <= i ? j : 0);

  return res;
      
}
