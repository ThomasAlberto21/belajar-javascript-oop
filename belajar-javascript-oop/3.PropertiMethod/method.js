// Todo Method
/*

    Method adalah sebuah fungsi yang berada di dalam sebuah class dan dapat diakses melalui instance Class tersebut. Method biasanya mengindikasikan hal yang dapat dilakukan oleh sebuah class. Bila kita berbicara tentang class Car, method yang ada bisa drive(), reverse(), dan turn().

*/

class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chasissNumber = this._generateChasissnumber();
  }

  get chasissNumber() {
    return this.chasissNumber;
  }

  set chasissNumber(chasissNumber) {
    console.log('Anda tidak dapat mengubah chasissNumber');
  }

  // Method
  drive() {
    console.log(
      `Mobil merek ${this.brand} dan bewarna ${this.color} sedang berkendara dengan kecepatan ${this.maxSpeed} `
    );
  }

  reverse(arah) {
    console.log(
      `Mobile merek ${this.brand} dan bewarna ${this.color} sedang membalikan mobilnya ke arah ${arah}`
    );
  }

  turn() {
    console.log(
      `Mobile merek ${this.brand} dan bewarna ${this.color} sudah mematikan mobilnya`
    );
  }

  _generateChasissnumber() {
    return `${this.brand} - ${Math.floor(Math.random() * 10000)}`;
  }
}

const car = new Car('Lamborgini', 'White', 400);
console.log(car);
car.drive();
car.reverse('kiri');
car.turn();




// Todo Member Visibility
/*

    Member visibility bisa disebut juga sebagai hak akses pada sebuah properti dan method di dalam class. Secara default, seluruh properti dan method yang dibuat di dalam class bersifat public, alias dapat diakses di luar dari kode class via instance. Selain public, kita juga bisa membuat properti dan method bersifat private, terutama ketika kita ingin properti atau method tersebut hanya digunakan dalam cakupan kode di dalam class saja (penggunaan internal).

*/
