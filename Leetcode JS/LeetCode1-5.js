// 1. Two Sum

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length-1; i++){
    let int1 = nums[i];
    for (let j = i+1; j < nums.length; j++){
      let int2 = nums[j];
      if (int1 + int2 === target) return [i, j];
    }
  }
}

// 2. Add Two Numbers

// You are given two non - empty linked lists representing two non - negative integers.The digits are stored in reverse order and each of their nodes contain a single digit.Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

//   Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

var ListNode = function (val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function (l1, l2) {
  let current1 = l1;
  let current2 = l2;
  let newTree = ListNode(current1.val + current2.val);
  let nextNode = newTree;
  while (current1.next && current2.next){
    nextNode = nextNode.next;
    current1 = current1.next;
    current2 = current2.next;
    nextNode.val = ListNode(current1.val + current2.val);
  }
  return newTree;
};