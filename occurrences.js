// Given two Strings [s0, s1], find the number of ocurrences of s1 in s0
// s0 = 'ababa';
// s1 = 'aba';
// [aba]ba && ab[aba]

s0 = 'ababa';
s1 = 'aba';

occurrences (s0, s1);

function occurrences (s0, s1) {
  let position = 0;
  let count = 0;

  while (true) {
    position = s0.indexOf(s1, position);
    if (position >= 0) {
      count++;
      position++;
    } else {
      break;
    }
  }
  
  console.log(count);
  return count;
}
