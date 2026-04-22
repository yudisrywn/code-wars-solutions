/* 
Mengalikan suatu bilangan jika genap maka mengembalikan 8, selainnya 9.
*/
// export function simpleMultiplication(num: number): number {
//   if (num % 2 == 0) {
//     return num * 8;
//   } else {
//     return num * 9;
//   }
// }

export const simpleMultiplication = (num: number):number => num%2 === 0 ? num * 8 : num * 9;