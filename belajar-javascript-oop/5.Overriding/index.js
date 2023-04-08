// Todo Overriding
/*

    Konsep lain yang lekat dengan pewarisan adalah overriding. Overriding di dalam OOP merupakan fitur yang memperbolehkan subclass mendefinisikan implementasinya sendiri pada sebuah method yang sebenarnya sudah didefinisikan pada superclass-nya. Overriding diterapkan ketika kita ingin menetapkan implementasi yang spesifik di subclass pada sebuah method yang berasal dari superclass. Overriding juga biasa diterapkan ketika kita ingin menambah properti baru secara spesifik pada sebuah subclass.

    Ketika kita melakukan pewarisan, sering kali kita perlu menambahkan properti baru yang spesifik hanya pada subclass tertentu. Contoh, pada WhatsAppService yang merupakan subclass dari MailService, kita membutuhkan properti yang mengindikasikan akun bisnis atau bukan, sehingga kita perlu membuat properti baru bernama isBusiness hanya pada subclass tersebut. Agar bisa melakukan ini, kita perlu melakukan constructor overriding.

*/

class MailService {
  constructor(sender) {
    this.sender = sender;
  }
}

//  method super() artinya memanggil constructor superclass, yaitu MailService. Dengan begitu, kita tidak perlu mendefinisikan dan menetapkan nilai properti umum satu per satu.
class WhatsAppService extends MailService {
  constructor(sender, isBussines) {
    super(sender);
    this.isBussines = isBussines;
  }
}


const WhatsApp = new WhatsAppService('+6281234567890', true);
console.log(WhatsApp);