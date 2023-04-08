//  Todo Inheritance / Pewarisan
/*

    Dalam gambaran dunia nyata, banyak sekali objek yang berbeda, tetapi punya kemiripan tertentu. Jika kita berbicara mobil, tentu banyak ragam dari mobil mulai dari mobil transportasi, mobil balap, ambulan, truk, dan mobil yang lainnya. Walaupun semua ragam tersebut termasuk dalam kategori mobil, tetapi kemampuannya berbeda-beda. Contoh, mobil balap memiliki kemampuan untuk mengaktifkan mode sport, sehingga dapat melaju dengan cepat; mobil ambulan dapat mengaktifkan sinyal darurat; mobil truk dapat menggerakan container-nya untuk menurunkan muatan. Di sisi lain, mereka memiliki kesamaan yaitu sama-sama mobil yang memiliki merek, warna, kecepatan maksimal, dan nomor rangka.

    Sama halnya pada objek pada pemrograman, kita sering sekali mendapati kasus membuat sebuah objek dengan spesifikasi yang serupa, tetapi memiliki beberapa perbedaan kecil. Contoh, objek EmailService dengan WhatsAppService. Kedua objek tersebut sama-sama layanan perpesanan, mereka dapat mengirim pesan dan membutuhkan properti sender. Namun, terdapat beberapa perbedaan contohnya WhatsApp bisa mengirim pesan secara broadcast, sedangkan email bisa mengirim pesan secara delay.

*/

// class parent
class MailService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} mengirim pesan ${message} untuk ${receiver}`);
  }
}

// subclass
class WhatsAppService extends MailService {
  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }
}

class EmailService extends MailService {
  sendDelayMessage(message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver);
    }, delay);
  }
}



// Todo Operator instanceof
/*

    Ketika menulis kode, kita seringkali kita perlu mengecek jenis dari objek tersebut. Salah satu cara mengetahui jenis objek adalah dengan mengecek rantai prototype-nya. Nah, untuk mengetes sebuah objek berdasarkan prototype dari constructor function atau class tertentu, kita bisa menggunakan operator instanceof.

    Contoh : operand1 instanceof operand2
    * operand1: merupakan objek yang ingin dites prototype-nya.
    * operand2: merupakan constructor function atau class.

*/

const WhatsApp = new WhatsAppService('+62983293293');
WhatsApp.sendMessage('Hello', '+7382739232');
WhatsApp.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);
WhatsApp.sendDelayMessage(); // Error karena method tidak ada di subclass


// instanceof
console.log(WhatsApp instanceof WhatsAppService); // true
console.log(WhatsApp instanceof EmailService); // false
console.log(WhatsApp instanceof MailService); // true


const Email = new EmailService('thomas@gmail.com');
Email.sendMessage('Thank You', 'dicoding@gmail.com');
Email.sendDelayMessage('thank you', 'frans@gmail.com', 2000);
Email.sendBroadcastMessage(); // Error karena method


// Instanceof
console.log(Email instanceof EmailService); // true
console.log(Email instanceof WhatsAppService); // false
console.log(Email instanceof MailService); // true

