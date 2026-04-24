// let nama = "String Dua";
// let namaBaru =
//   nama.split(" ")[0].charAt(0) + "." + nama.split(" ")[1].charAt(0);
// console.log(namaBaru);

//? solution 1
// export function abbrevName(name: string): string {
//   return name.split(' ')[0].charAt(0).toUpperCase() + '.' + name.split(' ')[1].charAt(0).toUpperCase();
// }

//? solution 2
export function abbrevName(name: string): string {
  return name
    .split(" ")
    .map((item) => item[0].toUpperCase())
    .join(".");
}
