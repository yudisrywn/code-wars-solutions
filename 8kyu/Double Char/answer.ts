// let kataLama = "String";
// let kataBaru = "";

// for (let index = 0; index < kataLama.length; index++) {
//   kataBaru += kataLama[index].repeat(2);
// }

// console.log(kataBaru);

// export function doubleChar(str: string): string {
//   let kataBaru = ""
//   for (let index = 0; index < str.length; index++) {
//     kataBaru += str[index].repeat(2);
//   }
//   return kataBaru
// }

export function doubleChar(str: string): string {
  return str.split('').map((a: string) => a.repeat(2)).join('');
}
