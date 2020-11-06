# 11. Container With Most Water

# Given n non-negative integers a1, a2, ..., an , where each represents a point 
# at coordinate (i, ai). n vertical lines are drawn such that the two endpoints 
# of the line i is at (i, ai) and (i, 0). Find two lines, which, together with 
# the x-axis forms a container, such that the container contains the most water.

# Notice that you may not slant the container.

# Example 1:


# Input: height = [1,8,6,2,5,4,8,3,7]
# Output: 49
# Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
# In this case, the max area of water (blue section) the container can contain is 49.
# Example 2:

# Input: height = [1,1]
# Output: 1
# Example 3:

# Input: height = [4,3,2,1,4]
# Output: 16
# Example 4:

# Input: height = [1,2,1]
# Output: 2
 

# Constraints:

# n = height.length
# 2 <= n <= 3 * 104
# 0 <= height[i] <= 3 * 104

from typing import List
def maxArea(self, height: List[int]) -> int:
  #strategy
  #iterate from front and back of the list, calculating area from the shortest of the two
  #move the shortest point in by one index and repeat calculating area
  #stop iterating as soon as the two indexes are next to eachother
  #return the greatest area found

  if len(height) == 2:
    return min(height)

  areas = []

  i = 0
  j = len(height)-1

  while j != i:
    if height[i] >= height[j]:
      areas.append(height[j] * (j - i))
      j-=1
    else:
      areas.append(height[i] * (j - i))
      i+=1

  return max(areas)
