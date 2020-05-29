function oddOrEven(array) {
  let arraylength = array.length;
  if (arraylength == 0) {
    return "even";
  } else if (arraylength > 0) {
    let sum = 0;
    for (i = 0; i < arraylength; i++) {
      sum = sum + array[i];
    }
    if (sum % 2 == 0) {
      return "even";
    } else {
      return "odd";
    }
  }
}

console.log(oddOrEven([]));
/*Given a list of numbers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Example:
odd_or_even([0])          ==  "even"
odd_or_even([0, 1, 4])    ==  "odd"
odd_or_even([0, -1, -5])  ==  "even"*/
