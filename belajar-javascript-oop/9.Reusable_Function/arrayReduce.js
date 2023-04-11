/*

    reduce() adalah salah satu method bawaan dari objek Array pada JavaScript, yang digunakan untuk mengurangi elemen-elemen dalam array menjadi satu nilai yang dihasilkan dari operasi yang diterapkan pada setiap elemen.

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

const allScoreStudents = students.reduce(
  (acc, student) => acc + student.score,
  0
);
console.log(allScoreStudents);
