// export function getGrade(a: number, b: number, c: number): string {
//   const score = (a + b + c) / 3;

//   if (score >= 90 && score <= 100) {
//     return "A";
//   } else if (score >= 80 && score < 90) {
//     return "B";
//   } else if (score >= 70 && score < 80) {
//     return "C";
//   } else if (score >= 60 && score < 70) {
//     return "D";
//   } else{
//     return "F";
//   }
// }

//? Tenary Operator
/*
1. Jadi disuruh untuk menyelesaikan fungsi dimana mengembalikan rata - rata dari tiga score dan nilai yang dikembalikan adalah huruf yang sesuai dengan rata - rata score yang diperoleh.
2. Untuk nilai yang di test antara 0 - 100 dan tidak ada nilai negatif maupun nilai yang lebih besar dari 100.
3.Karena nilai tidak lebih besar atau kurang dari 0 maka bisa langsung score >= 90 misalnya untuk nilai A, tidak perlu <=100 karena nilai tertinggi pasti 100.
*/

export const getGrade = (a: number, b: number, c: number): string => ((a + b + c) / 3 >= 90 ? "A" : (a + b + c) / 3 >= 80 ? "B" : (a + b + c) / 3 >= 70 ? "C" : (a + b + c) / 3 >= 60 ? "D" : "F");

// export function getGrade(a: number, b: number, c: number): string { const s = (a + b + c) / 3; return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"; }