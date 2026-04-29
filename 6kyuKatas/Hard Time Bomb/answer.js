// Find the wire.
/*
Sebuah bom telah diatur untuk meledak! Kamu harus menemukan kabelnya dan memotongnya untuk menghentikan hitungan mundur. Ada variabel global yang menyimpan ID numerik dari kabel yang harus dipotong. Temukan variabel tersebut, lalu kamu bisa menjalankan fungsi Bomb.CutTheWire(wireKey);

Diketahui:
1. ada variabel global menyimpan id numerik.

Ditanya:
Temukan variabel global yang numerik untuk memotong kabel bom.

Jawab:
Geledah variabel global dengan for in
setelah itu simpan key global kedalam variabel
Jika key yang disimpan adalah number maka potong kabel bom
*/

// Kita menggeledah objek 'global'
for (let key in global) {
  // Ambil nilai yang disimpan di dalam kunci tersebut
  let value = global[key];

  // Ciri-ciri kabel: nilainya adalah angka
  if (typeof value === "number") {
    // Jika ketemu, segera potong!
    Bomb.CutTheWire(value);
  }
}
