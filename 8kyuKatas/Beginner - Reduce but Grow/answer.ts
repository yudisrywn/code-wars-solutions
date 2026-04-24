// let array = [1, 2, 3, 4];
// let hasil = 1;

// for (let index = 0; index < array.length; index++) {
//   hasil *= array[index];
// }
// console.log(hasil);

export function grow(arr: number[]): number {
  let hasil = 1;
  for (let index = 0; index < arr.length; index++) {
    hasil *= arr[index];
  }
  return hasil;
}
