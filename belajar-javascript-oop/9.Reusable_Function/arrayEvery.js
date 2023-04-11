/*

    Fungsi every() pada JavaScript adalah salah satu method bawaan dari objek Array yang digunakan untuk mengecek apakah semua elemen pada array memenuhi suatu kondisi yang diberikan dan return dari every adalah boolean.

*/

const scores = [70, 85, 90];
const minimumScore = 90;

const examPassed = scores.every((score) => score >= minimumScore);
console.log(examPassed);
