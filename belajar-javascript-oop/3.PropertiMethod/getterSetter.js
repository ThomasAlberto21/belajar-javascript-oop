// Todo Properti Getter dan Setter
/* 

    Secara standar, properti di dalam sebuah instance class bersifat mutable atau dapat diubah nilainya. Meskipun kita sudah menetapkan nilai chassisNumber oleh sistem, nyatanya nilai tersebut dapat diubah dengan mudah ketika objek mobil telah dibuat.

    Lalu, bagaimana cara memproteksi agar nilai dari properti chassisNumber tidak dapat diubah? Nah, ketika kita berhadapan dengan kasus seperti ini, kita bisa memanfaatkan properti getter dan setter.

    Sebelum memecahkan masalah di atas, ketahuilah bahwa ada dua tipe properti, yaitu data property dan accessor property.

    Data property merupakan properti yang sejauh ini kita lihat, properti yang langsung menampung sebuah nilai di dalam sebuah objek.

    Sedangkan accessor property merupakan properti yang dikontrol oleh sebuah getter dan setter. 
    
    * Nilai yang didapatkan dari properti tersebut dikontrol oleh method get 
    * dan cara menetapkan nilai tersebut dikontrol oleh method set.

*/

class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;

    // Mendefinisikan properti di dalam class itu sendiri
    this._chasissNumber = `${brand} - ${Math.floor(Math.random() * 1000)}`;
  }

    // Getter
  get chasissNumber(){
    return this._chasissNumber
  }

    // Setter
  set chasissNumber(chasissNumber){
    console.log('Anda tidak dapat mengubah chasiss number');
  }
}

const car = new Car('BMW', 'black', 400);
console.log(car.chasissNumber);

car.chasissNumber = 'BMW-2';
console.log(car.chasissNumber);





// Todo accessor property
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Getter
  get fullName() {
    return `Halo nama saya ${this.firstName} ${this.lastName}`;
  }

  // Setter
  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const user = new User('Thomas', 'Alberto');


// menggunakan getter untuk mengambil nilai properti user dan user.fullName
console.log(user);
console.log(user.fullName);


// menggunakan setter untuk mengubah nilai properti fullName
user.fullName = 'Fransiskus Berto';
console.log(user.fullName);



/*

    Di dalam class User, Anda bisa melihat bahwa terdapat data property firstName dan lastName. Nilai dari properti tersebut ditetapkan via argumen constructor. Selain itu, Anda juga bisa melihat sebuah method get fullName dan set fullname. Method tersebut merupakan accessor property yang mengatur cara akses dari properti fullName.

    Sebab kita menetapkan getter dan setter untuk properti fullName, maka kita bisa mengakses properti tersebut melalui instance User. Ketika kita coba mendapatkan nilai properti fullName dengan cara user.fullName, method getter akan dijalankan dan nilai yang dikembalikan akan menjadi nilai dari properti tersebut.


    ! Catatan penting yang perlu Anda ketahui mengenai getter setter adalah:

    * Getter pada JavaScript OOP (Object-Oriented Programming) adalah metode atau fungsi yang digunakan untuk mengambil nilai dari suatu properti di dalam sebuah objek. Getter memungkinkan penggunaan sintaksis yang mudah untuk mengambil nilai properti objek tanpa harus mengakses variabel properti secara langsung. method getter harus mengembalikan sebuah nilai dan nilai tersebut akan menjadi nilai properti;

    * Setter pada JavaScript OOP (Object-Oriented Programming) adalah metode atau fungsi yang digunakan untuk mengubah nilai dari suatu properti di dalam sebuah objek. Setter memungkinkan penggunaan sintaksis yang mudah untuk mengubah nilai properti objek tanpa harus mengakses variabel properti secara langsung dan method setter harus menerima satu argumen.

*/
