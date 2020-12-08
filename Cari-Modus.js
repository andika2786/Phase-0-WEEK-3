/*
Objectives
-----------------
Mampu menyelesaikan masalah yang diberikan

RESTRICTION Hanya boleh menggunakan built-in function untuk menambahkan atau mengurangi data dalam array, seperti .shift(), unShift(), push(), dan pop() dan built-in function untuk mengakses isi dalam object seperti for..in, for...of, Object.keys(), dll

Directions
------------------
Diberikan sebuah function cariModus yang menerima sebuah array kumpulan angka.
Function akan me-return modus dari array atau deret angka tersebut.
Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul.
Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1.
Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.
*/
// cara 1
function cariModus(arr) {
  // you can only write your code here!
// mengurutkan angka dalam array untuk memudahkan dalam menganalisa angka yang paling banyak
    let flag = false
    while(!flag) {
        flag = true
            for (let i = 1; i < arr.length; i++) {
                if (arr[i - 1] > arr[i]) {
                    flag = false
                    let temp = arr[i - 1]
                    arr[i - 1] = arr[i]
                    arr[i] = temp
                }
            }    
    }

// menghitung angka dalam array yang paling banyak
    let count = 0
    let modus
    
    for (let i = 0; i < arr.length; i++) {
        // const element = arr[i];
        let counts = 0    
        for (let j = 0; j < arr.length; j++) {
            // const element = arr[j];
            if(arr[i] === arr[j] && i !== j){
                counts++
                if (counts > count) {
                    count = counts
                    modus = arr[i]
                }
            }
        }
    }
    if (modus === undefined) {
        return - 1
    }
    else if (count === arr.length - 1){
        return - 1
    }
    return modus
    
}


// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1