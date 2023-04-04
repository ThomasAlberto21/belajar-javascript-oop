// Todo Constructor Function
/*

    bagaimana bisa membuat sebuah objek dengan sebuah fungsi? Itulah salah satu kemampuan fungsi di JavaScript. Fungsi di bawah bukanlah fungsi biasa, melainkan constructor function. Berikut beberapa perbedaan yang harus Anda perhatikan.

        1.Penamaan fungsi yang merupakan constructor function, secara konvensi harus ditulis dengan huruf kapital. Itulah alasan kami memberi nama fungsi tersebut Car, bukan car. Hal ini penting untuk Anda ikuti guna membedakan fungsi biasa dengan constructor function karena penggunaannya berbeda.

        2.Constructor function dapat memanfaatkan keyword this yang bernilai objek (instance) dirinya sendiri. Keyword this dapat dimanfaatkan untuk mengakses nilai properti atau method dari objek tersebut. Contoh, kami menggunakan keyword this untuk menetapkan nilai properti brand dari argumen fungsi. Selain itu, di dalam method drive, kami juga menggunakan this untuk mendapatkan nilai properti brand dan color.

        3.Constructor function memiliki internal property bernama prototype. Properti ini digunakan untuk mendefinisikan method-method yang akan dimiliki oleh objek yang dibuat. Alasan method perlu didefinisikan di dalam prototype agar mudah untuk diwarisi ketika melakukan pewarisan.

        4.Terakhir, agar fungsi mengembalikan sebuah objek, Anda harus memanggilnya dengan menambahkan keyword new. 

*/

// Todo Membuat function constructor menggunakan function
function Car(brand, color, maxSpeed, chassisNumber) {
  this.brand = brand;
  this.color = color;
  this.maxSpeed = maxSpeed;
  this.chassisNumber = chassisNumber;
}

Car.prototype.drive = function () {
  console.log(`${this.brand} , ${this.color} is Driving`);
};

Car.prototype.reverse = function () {
  console.log(`${this.brand} , ${this.color} is Reversing`);
};

Car.prototype.turn = function () {
  console.log(`${this.brand} , ${this.color} is Turning`);
};

// Membuat objek mobil dengan constructor function Car
const car1 = new Car('BMW', 'black', 400, '13323b');
console.log(car1);

car1.drive(); // output: BMW Black is driving







