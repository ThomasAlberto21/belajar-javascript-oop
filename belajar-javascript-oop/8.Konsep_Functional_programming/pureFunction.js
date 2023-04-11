// Todo Pure Function
/*

     Pure Function merupakan konsep dari pembuatan fungsi yang mengharuskan fungsi untuk tidak bergantung terhadap nilai yang berada di luar fungsi atau parameternya. Sehingga mau seperti apa keadaanya, fungsi yang dibuat selalu menghasilkan sesuatu yang sama, terkecuali bila fungsi tersebut diberikan nilai parameter yang berbeda.

    Selain dilarang untuk bergantung terhadap nilai luar, pure function juga dilarang keras untuk mengubah nilai yang berada di luar baik secara sengaja atau tidak sengaja. Pure function tidak boleh menimbulkan efek samping (no side effect) ketika digunakan.

*/

const hitungLuasLingkaran = (jari_jari) => {
  return 3.14 * jari_jari * jari_jari;
};

console.log(hitungLuasLingkaran(4));




// Contoh 2
const createPersonWithAge = (person, age) => {
  return { ...person, age };
};

const person = {
  name: 'Thomas Alberto',
};

const newPerson = createPersonWithAge(person, 19);

console.log({ person, newPerson });
