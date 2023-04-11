// Todo Immutability
/*

    Immutability atau keabadian adalah konsep dalam pemrograman di mana nilai objek tidak dapat diubah setelah dibuat. Dalam konsep ini, setiap kali nilai objek diubah, maka objek tersebut harus diganti dengan objek baru dengan nilai yang diinginkan.

    Konsep immutability sangat kental pada paradigma FP. Anda bisa lihat sebelumnya pada contoh penggunaan array map. Ketika menggunakan array.map(), alih-alih ia mengubah nilai dari array itu sendiri, malah ia membuat atau menghasilkan array baru.

*/

const user = {
  firstName: 'Thomas',
  lastName: 'albert',
};

const createUserWithNewLastName = (newLastName, user) => {
  return { ...user, lastName: newLastName };
};

const newUser = createUserWithNewLastName('Alberto', user);
console.log(newUser);
