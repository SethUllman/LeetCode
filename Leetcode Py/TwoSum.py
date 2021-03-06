# 1. Two Sum
# Easy

# Given an array of integers, return indices of the two numbers such that they add up to a specific target.

# You may assume that each input would have exactly one solution, and you may not use the same element twice.

# Example:

# Given nums = [2, 7, 11, 15], target = 9,

# Because nums[0] + nums[1] = 2 + 7 = 9,
# return [0, 1].


def twoSum(nums, target):
  h = {}
  for i, num in enumerate(nums):
    result = target - num
    if result not in h:
      h[num] = i
    else:
      return [h[result], i]

print(twoSum([5,10,3,4], 8))
    