/*

    Fungsi filter() pada JavaScript adalah salah satu method bawaan dari objek Array yang digunakan untuk membuat array baru dengan elemen-elemen yang memenuhi kriteria tertentu.

*/

const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) =>
  Boolean(item)
);
console.log(truthyArray);

// Contoh 2
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

const smartStudent = students.filter((student) => student.score > 80);
console.log(smartStudent);
