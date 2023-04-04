console.log('Kintamųjų inicijavimas'); 
console.log(1 + ' uzduotis');
const num1 = 5;
console.log(num1);
const num2 = 17;
console.log(num2);
const num3 = 28;
console.log(num3);

console.log(2 + ' uzduotis');
const word1 = 'Dangus';
console.log(word1);
const word2 = 'aitvaras';
console.log(word2);
const word3 = 'televizorius';
console.log(word3);

console.log(3 + ' uzduotis');
const nums1 = [1, 20, 5, 9, 48];
console.log(nums1);
const nums2 = [2, 7, 10, 15, 25];
console.log(nums2);
const nums3 = [77, 66, 55, 44, 33];
console.log(nums3);

console.log(4 + ' uzduotis');
const names = ['Loreta', 'Jonas', 'Greta', 'Nedas', 'Karina'];
console.log(names);
const colors = ['red', 'green', 'blue', 'orange', 'white'];
console.log(colors);
const things = ['house', 'tree', 'sun', 'ball', 'lamp'];
console.log(things);

console.log('------------------------');
console.log('Veiksmai su kintamaisiais'); 
console.log(1 + ' uzduotis');
const sumNum = num1 + num2 + num3;
console.log(sumNum);

console.log(2 + ' uzduotis');
const sumWord = word1 + ' ' + word2 + ' ' + word3;
console.log(sumWord);

console.log(3 + ' uzduotis');
const count1 = nums1[0] - nums1[1] + nums1[2] - nums1[3] + nums1[4];
const count2 = nums2[0] - nums2[1] + nums2[2] - nums2[3] + nums2[4];
const count3 = nums3[0] - nums3[1] + nums3[2] - nums3[3] + nums3[4];
console.log(count1);
console.log(count2);
console.log(count3);

console.log(4 + ' uzduotis');

const sumArray = things[4] + ', ' + things[3] + ', ' + things[2] + ', ' + things[1] + ', ' + things[0] + ', ' + colors[4] + ', ' + colors[3] + ', ' + colors[2] + ', ' + colors[1] + ', ' + colors[0] + ', ' + names[4] + ', ' + names[3] + ', ' + names[2] + ', ' + names[1] + ', ' + names[0] + '.';
console.log(sumArray);

// Kitas budas
const array1 = names.reverse();
const array2 = colors.reverse();
const array3 = things.reverse();
const sumArray1 = array3.join(', ') + ', ' + array2.join(', ') + ', ' + array1.join(', ') + '.';

const sumArray2 = array3.concat(array2, array1);

console.log(sumArray1);
console.log(sumArray2);

console.log('---------------------');
console.log('Funkcijos');

console.log(1 + ' uzduotis');

function tusciaFunkcija() {
    return 'false'
}
console.log(tusciaFunkcija());

console.log(2 + ' uzduotis');

const skaicius1 = 9;
const skaicius2 = 17;
const skaicius3 = 33;

function daugyba(a, b) {
    const sandauga = a * b;
    return sandauga;
}

console.log(daugyba(skaicius1, skaicius2));
console.log(daugyba(skaicius3, skaicius2));
console.log(daugyba(skaicius1, skaicius3));
console.log(daugyba(2, 7));


