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
};

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


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
