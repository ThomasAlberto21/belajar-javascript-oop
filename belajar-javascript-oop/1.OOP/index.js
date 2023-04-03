// Todo Object-Oriented Programming
/*

    Object-Oriented Programming (OOP) adalah salah satu paradigma dalam pemrograman yang berfokus pada pembuatan sebuah objek dan interaksi dengan objek-objek tersebut. Di OOP, objek merupakan sebuah entitas yang terdiri dari dua hal, yakni properties dan methods.

    ? Properti merupakan nilai di dalam objek yang menyimpan informasi tentang objek tersebut.
    ? Method merupakan fungsi yang menggambarkan aksi yang dapat dilakukan oleh objek tersebut.

    Paradigma OOP kerap digambarkan dengan kehidupan dunia nyata. Objek di dalam OOP, bisa kita anggap seperti objek yang ada di dunia nyata. Kita ambil contoh, mobil. Dalam OOP, sebuah mobil dapat dilihat sebagai objek yang memiliki beberapa properti seperti merek, warna, kecepatan maksimal, dan nomor rangka. Objek tersebut memiliki kemampuan atau method seperti maju, mundur, dan belok.

*/

const car = {
  // Properties
  color: 'red',
  brand: 'ford',
  maxSpeed: 400,
  plat: '12bbh8',

  // Method
  drive: () => {
    console.log('Driving');
  },
  reverse: () => {
    console.log('Reversing');
  },
  turn: () => {
    console.log('Turning');
  },
};

console.log(car.brand);
console.log(car.color);
console.log(car.maxSpeed);
console.log(car.plat);
car.drive();
car.reverse();
car.turn();