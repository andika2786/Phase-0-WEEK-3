/*
Directions

Diberikan sebuah function angkaPrima yang menerima satu parameter berupa angka.
Function akan me-return true jika angka tersebut adalah bilangan prima. Jika tidak, return false.
*/

function angkaPrima(angka) {
  // you can only write your code here!
  let pembagi = 0
  for (let i = 2; i < angka; i++) { // bilangan prima dimulai dari angka 2
      if (angka % i === 0) {
        pembagi++
      } 
  }
  if(pembagi !== 2) {
      return true
  } else {
      return false
  }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false