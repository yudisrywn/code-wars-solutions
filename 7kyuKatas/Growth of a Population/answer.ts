/*
1000 + 1000 * 0.02 + 50 => 1070 inhabitants -> tahun pertama
nb_year(1500, 5, 100, 5000) -> 15
p0 = p0 + (p0 * (percent * 0.01)) + aug
p0 < p
*/

// function nbYear(p0, percent, aug, p) {
//   let year = 0;
//   while (p0 < p) { //jadi cek dulu apa p0 < p
//     p0 = Math.floor(p0 + p0 * (percent / 100) + aug); //lakukan perhitungan pada p0 ditambah p0 setelah diberi diskon dan aug(total orang datang pertahun) setelah itu di tubulatkan kebawah dengan math.floor.
//     year += 1;
//   }
//   return year;
// }

export const nbYear = (p0:number, percent:number, aug:number, p:number): number => {
  let year: number = 0;
  while (p0 < p) {
    p0 = Math.floor(p0 + (p0 * (percent * 0.01)) + aug);
    year += 1;
  }
  return year;
}