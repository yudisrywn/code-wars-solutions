// const array = [1, -4, 7, 12];
// let hasilSum = 0
// for (let index = 0; index < array.length; index++) {
//   // index 0 = 1
//   // hasilSum = 0 + 1 = 1
//   // index 1 = -4
//   // hasilSum = 1 + absolute(-4) = 1 + 4 = 5
//   // index 2 = 7
//   // hasilSum = 5 + 7 = 12
//   hasilSum += Math.abs(array[index])
// }

// Disuruh menjumlahkan semua angka positif dalam array

//? Solusi 1
// export function positiveSum(arr: number[]): number {
//   let hasilSum = 0;
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] > 0) {
//       hasilSum += arr[index];
//     }
//   }
//   return hasilSum;
// }

//? Solusi 2
export function positiveSum(arr: number[]): number {
  return arr.reduce((total, current) => {
    return current > 0 ? total + current : total;
  }, 0);
}
