// Todo Rekursif
/*

    Rekursi adalah teknik pemrograman di mana sebuah fungsi memanggil dirinya sendiri secara berulang hingga mencapai kondisi yang diinginkan. Dalam pemrograman JavaScript, rekursi dapat digunakan untuk menyelesaikan masalah matematis atau masalah yang memerlukan pemanggilan fungsi secara berulang.

*/

// Contoh 1 Faktorial
function faktorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * faktorial(n - 1);
  }
}

console.log(faktorial(5)); // output: 120



// Contoh 2
const countDown = (start) => {
  console.log(start);
  if (start > 0) countDown(start - 1);
};

countDown(10);
