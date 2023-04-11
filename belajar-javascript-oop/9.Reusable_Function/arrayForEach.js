/*

    Array forEach merupakan fungsi bawaan dari array yang berfungsi untuk memanggil fungsi callback pada setiap iterasi index array. Berbeda dari fungsi array lain yang sudah kita bahas, fungsi ini tidak mengembalikan nilai apa pun. Jadi fungsi ini secara harfiah hanya berfungsi untuk memanggil fungsi callback-nya saja, tak lebih dari itu.

*/

// Todo Cara imperatif
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

for (let i = 0; i < names.length; i++) {
  console.log(`Hello ${names[i]}`);
}

// Todo Cara deklaratif
const names2 = ['Harry', 'Ron', 'Jeff', 'Thomas'];

names2.forEach((name) => {
  console.log(`Hello, ${name}!`);
});

/*

    Namun, ketahuilah bahwa ketika menggunakan forEach, kita tidak bisa menggunakan operator break atau continue pada proses perulangan (Anda bisa melakukannya pada perulangan for). Hal ini juga berlaku ketika pada fungsi map dan filter.

*/

const names3 = ['Harry', 'Ron', 'Jeff', 'Thomas'];

for (let i = 0; i < names3.length; i++) {
  if (names3[i] === 'Jeff') continue; // Bisa!

  console.log(`Hello, ${names3[i]}!`);
}

names3.forEach((name) => {
  if(name === 'Jeff') continue; // Tidak Bisa!
  console.log(`Hello, ${name}`);
});
