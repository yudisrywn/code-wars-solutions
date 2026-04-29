/*
Menjumlahkan 2 buah angka dan hasilnya dikembalikan sebagai biner.
Gunakan fungsi toString(2) -> untuk biner, toString(8) -> untuk oktal dll
*/

export function addBinary(a: number, b: number): string {
  return (a + b).toString(2);
}