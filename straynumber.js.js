function stray(numbers) {
  const sort = numbers.sort();
  if (sort[0] === sort[1]) {
    return sort[numbers.length - 1];
  } else {
    return sort[0];
  }
}

console.log(stray([1, 1, 2]));
/* You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3*/
