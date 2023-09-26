export default function concatArrays(array1, array2, string) {
  const arr = string.split("");
  const arr1 = array1.concat(array2);
  const arr2 = arr1.concat(arr);
  return arr2;
}
