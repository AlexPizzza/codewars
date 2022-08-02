function mergeArrays(arr1, arr2) {
  const ans = [];
  const sortedArr1 = arr1.sort((a, b) => a - b);
  const sortedArr2 = arr2.sort((a, b) => a - b);
  let i = 0,
    j = 0;
  while (i < sortedArr1.length && j < sortedArr2.length) {
    if (sortedArr1[i] < sortedArr2[j]) {
      ans.push(sortedArr1[i]);
      i++;
    }

    if (sortedArr1[i] === sortedArr2[j]) {
      ans.push(sortedArr1[i]);
      i++;
      j++;
    }

    if (sortedArr1[i] > sortedArr2[j]) {
      ans.push(sortedArr2[j]);
      j++;
    }
  }

  while (i < sortedArr1.length) {
    ans.push(sortedArr1[i]);
    i++;
  }

  while (j < sortedArr2.length) {
    ans.push(sortedArr2[j]);
    j++;
  }

  return ans;
}
