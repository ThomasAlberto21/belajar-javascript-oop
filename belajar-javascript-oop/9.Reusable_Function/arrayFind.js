/*

    Fungsi find() pada JavaScript adalah salah satu method bawaan dari objek Array yang digunakan untuk mencari elemen pertama pada array yang memenuhi suatu kondisi yang diberikan.

*/

const students = [
  {
    name: 'Harry',
    score: 60,
  },
  {
    name: 'James',
    score: 88,
  },
  {
    name: 'Ron',
    score: 90,
  },
  {
    name: 'Bethy',
    score: 75,
  },
];

const findStudens = students.find((student) => student.name === 'James');
console.log(findStudens);
