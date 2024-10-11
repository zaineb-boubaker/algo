
function insertion() {
  let arr = [10, 2, 5, 4, 8];
  let j = 0;
  let current = 0;
  for (let i = 1; i < arr.length; i++) {
    current = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
    console.log(arr);
  }
  return `the sorted array is: ${arr} `;
}
console.log(insertion());
