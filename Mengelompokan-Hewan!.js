/*
Objectives

    Mampu menyelesaikan masalah yang diberikan

RESTRICTION Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti .shift(), unShift(), push(), dan pop() dan built-in function untuk mengakses isi dalam object seperti for..in, for...of, Object.keys(), dll
Directions

Diberikan sebuah function groupAnimals yang menerima satu parameter berupa array yang berisi string.

Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya. Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja semua text lowercase.

Contoh jika hewan adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]

maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

Urutan hewan dalam array setiap pengelompokan huruf tidak penting.

*/

// cara 1.. dengan method sort() 
// function groupAnimals(animals) {
//   // you can only write your code here!

  
//   animals.sort() // mengurutkan data array
//   let kelompok = [];
//   let result = [];

//   for (var i = 0; i < animals.length; i++){
//     kelompok.push(animals[i]);
//     if (i === animals.length - 1){//loop berakhir, karena posisi udah di value terakhir
//         result.push(kelompok);
//         } else if (animals[i].charAt(0) !== animals[i + 1].charAt(0)){ //dipush, krn value sebelahnya udah beda
//           result.push(kelompok)
//           kelompok = []; //ngosongin array setelah push dilakukan
//         }
//   }
//   return result;
// }

// cara ke-2 tanpa method sort menggunakan flaging
function groupAnimals(animals) {
// you can only write your code here!
  let done = false;
  while (!done) {
      done = true
      for (let i = 1; i < animals.length; i += 1) {
          if (animals[i - 1] > animals[i]) {
              done = false;
              let tmp = animals[i - 1]
              animals[i - 1] = animals[i]
              animals[i] = tmp
          }
      }
  }

  let kelompok = []
  let result = []

  for (let i = 0; i < animals.length; i++) {
    kelompok.push(animals[i])
    if (i === animals.length - 1) {
        result.push(kelompok)
        } else if (animals[i].charAt(0) !== animals[i + 1].charAt(0)) {
          result.push(kelompok)
          kelompok = []
        }
    }
    return result
}


// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]