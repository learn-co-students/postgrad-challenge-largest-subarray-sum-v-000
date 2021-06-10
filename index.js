let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4];

// Kadane's algorithm.
// loop through the array, and each time you set the ans variable to the largest value seen, until that value becomes negative, then ans becomes zero.

// at the same time, the sum variable is overwritten each time through the loop, to the max previously seen sums or the largest 'ans' so far. Once the loop is
// finsihed executing, you will have the largest sum or answer seen so far.

function largestSubarraySum(array) {
  var ans = 0;
  var sum = 0;

  console.log(ans, sum);
  // loop through the array
  for (var i = 0; i < array.length; i++) {
    // make sure that the sum is not negative.
    ans = Math.max(0, ans + array[i]);

    // set the sum to be overwritten if something greater appears.
    sum = Math.max(sum, ans);
    console.log(ans, sum, array[i]);
  }
  console.log(ans, sum);
  return sum;
}

largestSubarraySum(array);
