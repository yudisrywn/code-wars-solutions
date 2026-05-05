/*
Buatlah sebuah fungsi yang menerima 3 nilai bilangan bulat a, b, dan c. Fungsi tersebut harus mengembalikan nilai true jika segitiga dapat dibentuk dengan panjang sisi-sisi yang diberikan, dan false dalam kasus lain.

Ini adalah teorema ketidaksamaan segitiga -> jumlah pertambahan sisi manapun harus lebih besar dari sisi ketiga. a+b>c, a+c>b, b+c>a

*/

export function isTriangle(a: number, b: number, c: number): boolean {
  return a + b > c && a + c > b && b + c > a;
}