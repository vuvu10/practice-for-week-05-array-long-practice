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
  // Initialization the count of strings with even characters
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    // checking if the length of the current str is even
    if (arr[i].length % 2 === 0) {
      // increment the count if the len is even.
      count++;
    }
  }
  return count;
};

const arr = ['ab', 'abc', 'a', 'abcd'];
console.log(evenNumOfChars(arr));
// Output: => 2
/*
Time complexity: O(n) Linear time.
The loop iterates through the entire arr, checking the len of each str.
the len check is a constant time oper.

Space complexity: O(1) constant time
The function uses only a few local var count & the loop index.

*/

const smallerThanCurr = arr => {

  // Your code here
  // sort a copy of the orig arr
  const sortedArr = [...arr].sort((a, b) => a - b);

  // initialization of a map to sort counts.
  const countMap = new Map();

  for (let i = 0; i < sortedArr.length; i++) {
    // Store the count of smaller elements for each unique #.
    if (!countMap.has(sortedArr[i])) {
      countMap.set(sortedArr[i], i);
    }
  }
  // result arr by mapping each element to its count.
  return arr.map(num => countMap.get(num));
};

const arr = [8, 1, 2, 2, 3];
console.log(smallerThanCurr(arr));

// Output: => [ 4, 0, 1, 1, 3 ]

/*
Time Complexity: O(n log n)
here sorting ste takes O(n log n) time.


Space Complexity: O(n)

*/


const twoSum = (arr, target) => {

  // Your code here
  //set to store seen #'s
  const numSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    // calculate the complement for the current #.
    const complement = target - arr[i];
    if (numSet.has(complement)) {
      // If the complement is already in the set, we found a pair.
      return true;
    }

    // add the current # to the set.
    numSet.add(arr[i])
  }
  // no valid pair found.
  return false;
};


const arr = [4, 2, 3, 6, 9];
console.log(twoSum(arr, 10));

const arr2 = [4, 2, 3, 6, 9];
console.log(twoSum(arr2, 16));
//Output:

/*
Time Complexity: O(n)
The loop iterates through the entire arr once. Each set operation takes constant time.

Space complexity: O(n)
the function sets "numSet" to store seen #'s, the size of the set is at most the
# of unique elements in the arr.

*/


const secondLargest = arr => {

  // Your code here
  if (arr.length < 2) {
    // not enough elements to find a 2nd largest
    return null;
  }
  // initialize the largest to - infinity
  let largest = -Infinity;
  //initialize 2nd largest to - infinity
  let secondLargest = -Infinity;

  for (const num of arr) {
    // Update largest and secondLargest based on the current number
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      // avoid duplicates
      secondLargest = num;
    }
  }
  return secondLargest;
};

const arr = [4, 2, 3, 6, 8];
console.log(secondLargest(arr));
//Output: => 6

/*
Time complexity: O(n) Linear time.
Space complexity: O(1) Constant time.

*/


const shuffle = (arr) => {

  // Your code here
  // original arr to avoid mutation
  const shuffleArr = [...arr];

  //
  for (let i = shuffleArr.length - 1; i > 0; i--) {

    //create a random i btwn 0 & i
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // swap elements @ randomIndx & i
    [shuffleArr[i], shuffleArr[randomIndex]] = [shuffleArr[randomIndex], shuffleArr[i]];
  }

  return shuffleArr;
};

const arr = [2, 5, 1, 3, 4, 7];
console.log(shuffle(arr));
// Output: => [ 7, 1, 2, 4, 3, 5 ]

/*
Time complexity: O(n) Linear time
The loop iterates through the entire arr once, so the time complexity is O(n),
where n is the length of the arr.
Space complexity: O(n) Linear time.
with the creation of a new shuffledArr, so the space complexity is O(n) linear space.

*/



module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
