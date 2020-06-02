function iqTest(numbers) {
  let y = numbers.split(" ").length;
  let z = numbers.split(" ");
  console.log(z);

  let odd = [];
  let even = [];

  for (i = 0; i < y; i++) {
    if (z[i] % 2 == 0) {
      even.push(z[i]);
    } else {
      odd.push(z[i]);
    }
  }
  let a = parseInt(odd);
  let b = parseInt(even);
  return even.length > odd.length
    ? z.indexOf(a.toString()) + 1
    : z.indexOf(b.toString()) + 1;
}

console.log(iqTest("2 4 7 8 10"));
console.log(iqTest("1 2 1 1"));

/*Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

##Examples :

iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd */
