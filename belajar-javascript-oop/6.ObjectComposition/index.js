// Todo Object Compositon
/*

    Object composition adalah salah satu teknik dalam konsep pemrograman berorientasi objek (OOP) di JavaScript, di mana sebuah objek baru dibuat dari gabungan beberapa objek lainnya dengan cara menggabungkan (compose) atau menggabungkan (aggregate) fungsionalitas dari objek-objek tersebut.

    Dalam teknik ini, objek-objek yang sudah ada dimasukkan ke dalam objek yang baru, dengan cara menempatkan referensi ke objek-objek tersebut di dalam properti atau metode pada objek baru. Objek baru tersebut kemudian dapat menggunakan fungsionalitas dari objek-objek yang sudah ada untuk membangun fungsionalitas yang lebih kompleks.

    ? Method Object.assign() adalah sebuah metode bawaan JavaScript yang digunakan untuk menyalin nilai dari satu atau lebih objek sumber ke objek target. Metode ini menggabungkan properti dari satu atau lebih objek ke objek target dan mengembalikan objek target yang telah dimodifikasi.

    ? instanceof adalah operator JavaScript yang digunakan untuk memeriksa apakah sebuah objek merupakan sebuah instance dari suatu tipe objek tertentu. Operator instanceof memeriksa apakah objek tersebut adalah instance dari kelas tertentu atau turunan dari kelas tersebut.
    
*/

class Developer {
  constructor(name) {
    this.name = name;
  }

  commitChange() {
    console.log(`${this.name} is committing change`);
  }
}

function canBuildUI(developer) {
  return {
    buildUI: () => {
      console.log(`${developer.name} is buiding UI`);
    },
  };
}

function canBuildApi(developer) {
  return {
    buildAPI: () => {
      console.log(`${developer.name} is building API`);
    },
  };
}

function canDeployApp(developer) {
  return {
    deployApp: () => {
      console.log(`${developer.name} is deploy app`);
    },
  };
}

function createFrontEndDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canBuildUI(developer));
}

function createBackEndDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canBuildApi(developer));
}

function createDevOps(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canDeployApp(developer));
}

function createFullStackDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(
    developer,
    canBuildUI(developer),
    canBuildApi(developer),
    canDeployApp(developer)
  );
}

console.log('===================Front End Developer===================');
const FrontEndDeveloper = createFrontEndDeveloper('Thomas');
FrontEndDeveloper.commitChange();
FrontEndDeveloper.buildUI();
console.log(
  `is ${FrontEndDeveloper.name} developer ?`,
  FrontEndDeveloper instanceof Developer
);

console.log('===================Back End Developer===================');
const BackEndDeveloper = createBackEndDeveloper('Ridho');
BackEndDeveloper.commitChange();
BackEndDeveloper.buildAPI();
console.log(
  `is ${BackEndDeveloper.name} developer ? `,
  BackEndDeveloper instanceof Developer
);

console.log('===================DevOps Developer===================');
const DevOpsDeveloper = createDevOps('Ria');
DevOpsDeveloper.commitChange();
DevOpsDeveloper.deployApp();
console.log(
  `is ${DevOpsDeveloper.name} developer ?`,
  DevOpsDeveloper instanceof Developer
);

console.log('===================FullStack Developer===================');
const FullStackDeveloper = createFullStackDeveloper('Sandhika Galih');
FullStackDeveloper.buildUI();
FullStackDeveloper.buildAPI();
FullStackDeveloper.deployApp();
console.log(
  `is ${FullStackDeveloper.name} is developer ?`,
  FullStackDeveloper instanceof Developer
);
