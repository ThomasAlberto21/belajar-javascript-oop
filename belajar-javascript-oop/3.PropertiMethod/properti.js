// Todo Properti
/* 

    Properti merupakan bagian dari class yang mendefinisikan nilai-nilai yang terkandung dalam sebuah instance class. Contohnya, jika Anda membuat class Car, properti adalah informasi yang sekiranya terdapat pada sebuah mobil seperti brand, color, maxSpeed, dan chasissNumber. Contoh lain, jika Anda membuat class Mail, secara umum propertinya adalah sender, receiver, subject, dan body.

*/

class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;

    // Mendefinisikan properti di dalam class itu sendiri
    this.chasissNumber = `${brand} - ${Math.floor(Math.random() * 1000) + 1}`;
  }
}

const car_bmw = new Car('BMW', 'black', 400);
console.log(car_bmw);




