const findMinimum = arr => {

  // Your code here
  let min = arr[0]; // O(1)

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;

};

const arr = [7, 5, 2, 3, 4, 1];
console.log(findMinimum(arr));
// Output => 1.
/*
Time complexity: O(n) The function iterates through the array once to find the
minimum element.
Space complexity: O(1) The function uses a constant amount of additional space
regardless of the input array' size.
 */


const runningSum = arr => {

  // Your code here
  // Initializes an empty arr to store the running sum.
  const result = [];
  // Initializes sum to zero.
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    // add the current element to the sum
    sum += arr[i];
    // push the updated sum to the result arr
    result.push(sum);
  }
  return result;
};

const arr = [1, 2, 3, 4];
console.log(runningSum(arr));

// [ 1, 3, 6, 10 ]

/*
Time complexity: O(n) Linear time.
The loop iterates through the entire array once, performing a constant time addition
for each element.
Space complexity: O(n) Linear time.
The function creates a new arr result, the size of the arr is equal to the original
arr' size, therefore the space complexity is also linear.
*/



















const evenNumOfChars = arr => {

  // Your code here
};

const smallerThanCurr = arr => {

  // Your code here

};

const twoSum = (arr, target) => {

  // Your code here
};

const secondLargest = arr => {

  // Your code here
};

const shuffle = (arr) => {

  // Your code here
};


module.exports = [runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
