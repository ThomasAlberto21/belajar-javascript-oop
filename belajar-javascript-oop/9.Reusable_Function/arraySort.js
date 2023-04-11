/*

    Fungsi sort() pada JavaScript adalah salah satu method bawaan dari objek Array yang digunakan untuk mengurutkan elemen-elemen pada array. Method sort() akan mengurutkan elemen-elemen pada array secara default secara alfabetis (ascending) berdasarkan Unicode value dari karakternya.

*/

// pengurutan di bawah didasarkan pada pengurutan bentuk tipe data string
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort();
console.log(array1);




// compare function (untuk mengurutkan sesuai yang kita inginkan)
/*

    Pada compare function, fungsi akan membandingkan 2 nilai yang akan menghasilkan 3 result yaitu negatif (-), 0, dan positif (+).

    * Jika, negative maka `a` akan diletakkan sebelum `b`
    * Jika, positive maka `b` akan diletakkan sebelum `a`
    * Jika, 0 maka tidak ada perubahan posisi.

*/
const compareNumber = (a, b) => {
  return a - b;
};
const sorting = array1.sort(compareNumber);
console.log(sorting);
