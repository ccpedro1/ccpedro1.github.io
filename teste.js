function birthday(s, d, m) {
  // Write your code here
  const arr = [...s];
  let ways = 0;
  for(let i = 0; i < s.length-m+1; i++) {
    console.log(arr.slice(i,m+i))
    if(arr.slice(i,m+i).reduce((acc,value) => acc + value) === d) {
        ways++;
    }
  }
  return ways
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2));