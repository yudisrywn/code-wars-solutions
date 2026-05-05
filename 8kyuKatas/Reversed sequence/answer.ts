/*
buat fungsi dimana mengembalikan array mulai dari bilangan n sampai ke 1 alias n>0
n=5 --> [5,4,3,2,1]
*/

// let n = 5;
// let array = [];
// for (n; n > 0; n--) {
//   array.push(n);
// }
// console.log(array)

export const reverseSeq = (n: number): number[] => {
  let array: number[] = [];
  for (n; n > 0; n--) {
    array.push(n);
  }
  return array;
};
