/*
Seorang pahlawan sedang dalam perjalanan menuju kastil untuk menyelesaikan misinya. Namun, ia diberitahu bahwa kastil itu dikepung oleh beberapa naga yang sangat kuat! Setiap naga membutuhkan 2 peluru untuk dikalahkan, dan pahlawan kita tidak tahu berapa banyak peluru yang harus ia bawa. Dengan asumsi ia akan mengambil sejumlah peluru tertentu dan maju untuk melawan sejumlah naga tertentu, apakah ia akan selamat?
Kembalikan true jika ya, false jika tidak :)

totalNaga * 2 <= jumlahPeluru
menggunakan lebih besar sama dengan karena 2 peluru bisa membunuh naga.
misal 2 naga * 2 peluru <  totalPeluru = 4 maka nilainya false
misal 2 naga * 2 peluru <= totalPeluru = 4  maka nilainya true
*/

// export function hero(bullets: number, dragons: number): boolean {
//   if (dragons * 2 <= bullets) {
//     return true;
//   } else {
//     return false;
//   }
// }

function hero(bullets: number, dragons: number): boolean {
  return dragons * 2 <= bullets;
}
