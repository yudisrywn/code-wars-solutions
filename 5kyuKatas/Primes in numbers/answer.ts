/*
Diketahui:
1. Diberikan bilangan positif n > 1, 
2. (p1**n1)(p2**n2)...(pk**nk) -> p(i) -> naik nilainya
3. n(i) kosong -. nilainya 1
Dit: temukan faktorisasi bilangan prima dari n

pembagi i = 2 -> bilangan prima terkecil
*/

// function primeFactors(n) {
//   let hasil = "";
//   let pembagi = 2;

//   while (n > 1) {
//     // misal n = 12
//     let pangkat = 0;
//     while (n % pembagi === 0) {
//       //jadi kita bagi n dengan bilangan prima terkecil yaitu 2 sampai habis jadi nanti angka misal 4,6,8 jadi tidak punya ruang soalnya udah dihabisin sama jatah prima 2.
//       pangkat++;
//       n = n / pembagi;
//     }
//     if (pangkat > 0) {
//       if (pangkat === 1) {
//         //untuk misal n === 2
//         hasil += `(${pembagi})`;
//       } else {
//         hasil += `(${[pembagi]}**${pangkat})`; // hasil = 0 + 2^2 = 4
//       }
//     }
//     pembagi++; //pembagi = 2 + 1 = 3
//     if (pembagi * pembagi > n && n > 1) {
//       hasil += `(${n})`;
//       break;
//     }
//   }
//   return hasil;
// }

export const primeFactors = (n: number): string => {
  let hasil = "";
  let pembagi: number = 2;

  while (n > 1) {
    let pangkat: number = 0;
    while (n % pembagi === 0) {
      pangkat++;
      n = n / pembagi;
    }
    if (pangkat > 0) {
      if (pangkat === 1) {
        hasil += `(${pembagi})`;
      } else {
        hasil += `(${[pembagi]}**${pangkat})`;
      }
    }
    pembagi++;
    if (pembagi * pembagi > n && n > 1) {
      hasil += `(${n})`;
      break;
    }
  }
  return hasil;
};
