// Todo Higher-Order Function
/*

    Higher-Order Function adalah konsep dalam pemrograman JavaScript di mana sebuah fungsi dapat menerima fungsi lain sebagai argumen (parameter) atau mengembalikan fungsi sebagai nilai kembali (return value). Fungsi yang dikirimkan atau dikembalikan tersebut disebut sebagai "callback function" atau "higher-order function".

*/

function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

function kali(a, b) {
  return a * b;
}

function bagi(a, b) {
  return a / b;
}

function hitung(a, b, operasi) {
  return operasi(a, b);
}

console.log(hitung(5, 3, tambah)); // output: 8
console.log(hitung(5, 3, kurang)); // output: 2
console.log(hitung(5, 3, kali)); // output: 15
console.log(hitung(5, 3, bagi)); // output: 1.6666666666666667

/*

    Pada contoh di atas, terdapat empat fungsi yaitu tambah, kurang, kali, dan bagi. Kemudian terdapat sebuah fungsi hitung yang menerima tiga argumen yaitu dua bilangan dan sebuah fungsi. Fungsi hitung akan memanggil fungsi operasi dengan dua argumen bilangan yang diterima sebagai parameter.

    Dalam contoh di atas, hitung dijadikan sebagai Higher-Order Function karena ia menerima fungsi sebagai argumen. Setiap pemanggilan hitung menghasilkan hasil yang berbeda tergantung pada fungsi operasi yang dipilih.

    Dalam pemrograman JavaScript, Higher-Order Function sangat berguna dalam penggunaan Array, seperti metode map, filter, dan reduce, serta dalam pengolahan data asinkronus seperti setTimeout dan fetch. Penggunaan Higher-Order Function juga dapat membantu dalam membuat kode lebih modular dan dapat digunakan kembali.

*/



const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (arr, action) => {
  const loopTrough = (arr, action, newArray = [], index = 0) => {
    const item = arr[index];
    if (!item) return newArray;
    return loopTrough(
      arr,
      action,
      [...newArray, action(arr[index])],
      index + 1
    );
  };

  return loopTrough(arr, action);
};

const newNames = arrayMap(names, (name) => `${name}!`);

console.log({
  names,
  newNames,
});
