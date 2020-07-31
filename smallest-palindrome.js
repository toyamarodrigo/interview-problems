// Return next smallest palindrome of a given number num.

palindrome('999');

function palindrome(n) {
  // Split every element of the given number into an array of elements
  number = n.toString().split('');

  // Total size of the array
  size = n.toString().length;

  // To find the middle of the array
  odd = size % 2;

  // if it's odd, the middle number is saved, else empty string
  if (odd) {
    mid = number[(size / 2) | 0];
  } else {
    mid = '';
  }

  // Left and Right side of the given number is saved. RightSide = LeftSide Reversed.
  leftSide = number.slice(0, size / 2).join('');
  rightSide = number
    .slice(0, size / 2)
    .reverse()
    .join('');

  // Saved palindrome
  let palindrome = leftSide + mid + rightSide;
  let paliMidLessThanNine = '';

  // If the generated palindrome is greater than the given number. Log
  if (palindrome > n) {
    console.log(palindrome);
  } else {
    // If mid exist
    if (mid) {
      // mid for cases 1 to 8, else we change mid to 0.
      // leftSide of given number must have a value, else is a single number.
      if (mid < '9' && leftSide) {
        mid = (parseInt(mid) + 1).toString();
        paliMidLessThanNine = leftSide + mid + rightSide;
        console.log(paliMidLessThanNine);
      } else {
        mid = '0';
      }
    }

    // Conditional for 99, 999 cases.
    // We print '1' + '0' times the size of the given number minus 1 + '1'
    if (leftSide == '9'.repeat(leftSide.length) && paliMidLessThanNine < n) {
      console.log('1' + '0'.repeat(size - 1) + '1');

      // Conditional for middle-left number lower than middle-right number
    } else if (paliMidLessThanNine < n) {
      leftSide = inc(leftSide);
      console.log(leftSide + mid + leftSide.split('').reverse().join(''));
    }
  }
}

function inc(left) {
  // Select the middle-left number.
  let last = left.length - 1;
  // Spliting the leftSide number in an array of elements.
  let leftlist = left.toString().split('');

  // if middle-left number is 9, change to 0
  while (leftlist[last] === '9') {
    leftlist[last] = '0';
    last -= 1;
  }

  // Parse first digit to int and add + 1. Parse to String again;
  leftlist[last] = (parseInt(leftlist[last]) + 1).toString();

  // Convert array of elements to String.
  return leftlist.join('');
}
