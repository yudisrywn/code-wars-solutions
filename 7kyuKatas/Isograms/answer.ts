/*
Isogram adalah sebuah kata yang tidak memiliki perulangan huruf misalnya ibu -> isogram, tapi babi -> bukan isogram karena b ada 2. Membuat fungsi untuk ngecek apakah kata tersebut sebuah isogram atau bukan. Asumsi string kosong('') -> isogram. Abaikan perbedaan huruf besar dan kecil

1. Ubah kata jadi semua huruf kecil/besar dulu untuk mengabaikan perbedaan huruf. string.toLowerCase().
2. Buat karakter jadi array berisi masing masing huruf. string.split(''). -> halo -> ['h', 'a', 'l', 'o'].
3. Cek apakah ada duplikat array dengan fungsi Set, new.Set(string).size bandingkan dengan panjang array. Soalnya Set akan menghasilkan output panjang data tanpa unique alias tanpa duplikat data.
*/

// let isogram = "Dermatoglyphics";
// let ubahJadiKecil = isogram.toLocaleLowerCase();
// let arrayBaru = ubahJadiKecil.split('');
// console.log(new Set(arrayBaru).size === arrayBaru.length); //jawaban true

//? solusi 1
export function isIsogram(str: string): boolean {
  let isArrIsogram = str.toLocaleLowerCase().split("");
  return new Set(isArrIsogram).size === isArrIsogram.length;
}

// export function isIsogram(str: string): boolean {
//   return new Set(str.toLowerCase()).size === str.length;
// }

// export function isIsogram(str: string): boolean {
//   // make it all lower case
//   str = str.toLowerCase();

//   // loop through the 'string' (because we can)
//   for (let i: number = 0; i < str.length; i++) {
//     // if the left-to-right index is'nt the same right-to-left index
//     if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
//       // then.. it's not an isogram
//       return false;
//     }
//   }

//   // if the loop ran and didnt return false, so its true
//   return true;
// }