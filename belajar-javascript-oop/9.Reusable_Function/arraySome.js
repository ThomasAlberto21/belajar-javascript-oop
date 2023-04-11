/*

    Fungsi some() pada JavaScript adalah salah satu method bawaan dari objek Array yang digunakan untuk mengecek apakah minimal satu elemen pada array memenuhi suatu kondisi yang diberikan.

*/

const array = [1, 2, 3, 4, 5];
const even = array.some((element) => element % 3 === 0);
console.log(even);
