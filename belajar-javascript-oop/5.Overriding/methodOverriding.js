// Todo Method Overriding
/*

    Konsep overriding juga bisa diterapkan pada method class. Method overriding biasanya dilakukan ketika kita ingin mengubah implementasi method warisan superclass. Contohnya, pada class MailService terdapat method send() yang sudah didefinisikan implementasinya. Namun, jika pada subclass WhatsAppService kita membutuhkan implementasi yang berbeda, kita bisa override method send().

    Cara override method pada subclass mirip seperti override constructor, tetapi kita tidak perlu memanggil method super di dalamnya.

*/

class MailService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(
      `Pengirim ${this.sender} Mengirim Pesan ${message} Untuk ${receiver}`
    );
  }
}

class WhatsAppService extends MailService {
  constructor(sender, isBusiness) {
    super(sender);
    this.isBusiness = isBusiness;
  }

  // Overriding method
  sendMessage(message, receiver) {
    console.log(
      `${this.sender} Mengirim Pesan ${message} untuk ${receiver} via WhatsApp`
    );
  }
}

const mailService = new MailService('Thomas');
const whatsappService = new WhatsAppService('+6281234567890', true);

mailService.sendMessage('Hai, apa kabar?', 'Frans');
whatsappService.sendMessage('Hai, apa kabar?', '+6289876543210');
