// Given an array of integers find a sequence with the largest sum.

// Use it as a mechanism to focus on process. 
// Think about this problem as a practice in breaking down problems, and knowing when to retreat from a potential solution.
// A couple of leading questions that might help you get started:

// What are some examples of input arrays where the solution becomes obvious? What can you learn from those obvious cases?
// What would a naive solution look like, that tested every possible combination?

// Challenge - Time Complexity
// After you've implemented a basic solution, consider how many operations it will use to find an answer, based on the size of the input array. If you can, write down the Big O time complexity of your solution.

// How could you make your solution faster? Try to improve your solution's runtime, or explain why you think your solution is as fast as possible.

// Kadane’s Algorithm
// local_maximum at index i is the maximum of A[i] and the sum of A[i] and local_maximum at index i-1.
// local_maximum[i] = max(A[i], A[i] + local_maximum[i - 1])

// This way, at every index i, the problem boils down to finding the maximum of just two numbers, A[i] and (A[i] + local_maximum[i-1]). Thus the maximum subarray problem can be solved by solving these sub-problems of finding local_maximums recursively. Also, note that local_maximum[0] would be A[0] itself.

function largestSubarraySum(array){
  // size of the array
  //const n = array.length
  // store the latest local_maximum 
  let localMax = 0
  // keep track of the maximum value of local_maximum, which in the end comes out to be the required output
  let globalMax = Number.NEGATIVE_INFINITY

  const isNegative = (currentValue) => currentValue < 0

  // if array of all negative integers
  if (array.every(isNegative)) {
    globalMax = 0
  }

  for (let i = 0; i < array.length; i++) {
    // Return the number with the highest value
    localMax = Math.max(array[i], array[i] + localMax)
  
    if (localMax > globalMax) {
      globalMax = localMax
    }
  }

  return globalMax
}