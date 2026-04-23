/*
Setelah melewati kuartal yang berat di kantor, kamu memutuskan untuk beristirahat sejenak dengan berlibur. Jadi, kamu akan memesan tiket pesawat untukmu dan pacarmu, serta berusaha melupakan semua masalah yang ada.
Kamu akan membutuhkan mobil sewaan agar bisa berkeliling selama liburan. Manajer perusahaan penyewaan mobil menawarkan beberapa penawaran menarik kepadamu.
Setiap hari penyewaan mobil dikenakan biaya $40. Jika Anda menyewa mobil selama 7 hari atau lebih, Anda akan mendapatkan potongan $50 dari total biaya. Atau, jika Anda menyewa mobil selama 3 hari atau lebih, Anda akan mendapatkan potongan $20 dari total biaya.
Tuliskan kode yang menghitung total biaya untuk berbagai jumlah hari (d).


diketahui: 
setiap hari biaya mobil sewa $40
jika menyewa <7 hari potongan $50 = (7.40) - 50 = 280-50 = 210
jika menyewa <3 hari potongan $20 = (3.40) - 20 = 100

artinya
1-2 hari tanpa potongan
3-6 hari potongan $20
7 lebih hari potongan $50
*/

// export function rentalCarCost(d: number): number {
//   if (d >= 3 && d < 7) {
//     return (d * 40) - 20;
//   } else if (d >= 7) {
//     return (d * 40) - 50;
//   } else {
//     return d * 40;
//   }
// }

export const rentalCarCost = (d: number): number =>
  d >= 3 && d < 7 ? d * 40 - 20 : d >= 7 ? d * 40 - 50 : d * 40;
