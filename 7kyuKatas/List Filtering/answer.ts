/* Disuruh filter bilangan bulat lalu ditampilkan dalam list baru yang berisi hanya bilangan bulat.
Bisa gunakan fungsi filter() untuk seleksi isi array yang lolos filter dimana harus number.
typeof 2 output number
typeof saya output string.
*/

export function filter_list(l: Array<any>): Array<number> {
  return l.filter((l) => typeof l === "number");
}
