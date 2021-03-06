// https://leetcode.com/problems/reverse-integer/

// Given a 32 - bit signed integer, reverse digits of an integer.
//   Note:
// Assume we are dealing with an environment that could only store integers within the 32 - bit signed integer range: [-231, 231 - 1].For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

//   Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Example 4:
// Input: x = 0
// Output: 0


// Constraints:
// -231 <= x <= 231 - 1


// check if int >= 0 && int < 10 -> return int

// negative true || false

// Turn out int into a string -> Reverse the string -> parseInt(string) = reversed int

// Return int * -1

const reverseInteger = (int) => {

  if (int > -10 && int < 10) return int;

  const negative = int <= 0;

  let string = int.toString().reverse();
  let reversedInt = parseInt(string);

  if(reversedInt > 2 ** (31 - 1)) return 0; // Math.pow(2,31-1)

  if (negative) {
    return reversedInt * -1;
  } else {
    return reversedInt
  }

}