/* 
1. Jadi ada sebuah tes dikelas -> saya lulus tes.
2. Karena ambisius saya ingin membandingkan rata - rata skor kelas dengan hasil tesku.
3. Harus mengembalikan nilai true jika lebih baik dari rata - rata kelas dan false jika tidak lebih baik.
4. Ketika menghitung rata - rata kelas nilaiku diikutkan.


nilaiku > totalNilaiKelas / panjangNilaiKelas
*/

// export function betterThanAverage(
//   classPoints: number[],
//   yourPoints: number,
// ): boolean {
//   const totalNilaiKelas = classPoints.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   }, 0);
//   if (yourPoints > totalNilaiKelas / classPoints.length) {
//     return true;
//   } else {
//     return false;
//   }
// }

export const betterThanAverage = (classPoints: number[], yourPoints: number): boolean => {
  return yourPoints > classPoints.reduce((accumulator, currentValue) => accumulator + currentValue, 0 ) / classPoints.length;
}