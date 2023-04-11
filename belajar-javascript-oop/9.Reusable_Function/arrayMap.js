/*

  Fungsi map() pada JavaScript adalah salah satu method bawaan dari objek Array yang digunakan untuk membuat array baru dengan memodifikasi setiap elemen pada array yang diberikan.

*/

const newArray = ['Thomas', 'Ridho', 'Frans', 'Irma'].map((name) => {
  return `${name}`;
});

console.log(newArray);
