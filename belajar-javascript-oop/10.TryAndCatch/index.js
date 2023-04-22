// Todo Try Catch
/*

    Taruh kode yang berpeluang menimbulkan eror di dalam blok try. Apabila terjadi eror di dalam blok kode try, maka ia akan ditangkap dan ditangani oleh blok kode catch. Sementara, jika tidak terjadi eror pada kode, maka blok catch akan diabaikan.

*/
try {
  console.log('Awal blok try'); // (1)
  errorCode; // (2)
  console.log('Akhir blok try'); // (3)
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}
