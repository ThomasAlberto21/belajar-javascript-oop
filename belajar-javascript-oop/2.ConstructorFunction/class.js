// Todo Membuat function constructor menggunakan class
class Mahasiswa {
  constructor(nama, nim, kelas, ttl, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.kelas = kelas;
    this.ttl = ttl;
    this.jurusan = jurusan;
  }

  Nama() {
    console.log(`Halo Perkenalkan nama saya ${this.nama}`);
  }

  Nim() {
    console.log(`Nim saya ${this.nim}`);
  }

  Kelas() {
    console.log(`Saya dari kelas ${this.kelas}`);
  }

  Jurusan() {
    console.log(`Saya kuliah Jurusan ${this.jurusan}`);
  }
}

// Membuat object Mahasiswa
const mahasiswa1 = new Mahasiswa(
  'Thomas Alberto',
  12221355,
  '12.1C.30',
  'Sungai Raya Pontianak , 17 April 2004',
  'Sistem Informasi'
);
console.log(mahasiswa1);

// memanggil function dan menampilkan ke console
mahasiswa1.Nama();
mahasiswa1.Nim();
mahasiswa1.Kelas();
mahasiswa1.Jurusan();
