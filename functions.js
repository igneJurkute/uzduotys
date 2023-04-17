console.clear();

console.log('Funkcijos');

console.log(1 + ' uzduotis');

function tusciaFunkcija() {
    return 'false'
}
console.log(tusciaFunkcija());

console.log('-------------------------');
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

console.log('-------------------------');
console.log(3 + ' uzduotis');

let c = 0;
let d = 0;

function skaitmenuKiekisSkaiciuje (c) {
    if (typeof c === 'number' && isFinite(c)) {
        d = ('' + c).length; // Skaiciu paverciam stringu
        return d;
        } else {
        return `Pateikta netinkamo tipo reikšmė.`;
        }
}

console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje('asd'));
console.log(skaitmenuKiekisSkaiciuje(NaN));

// Kitas būdas

function skaitmenuKiekisSkaiciuje (number) {
    if (typeof number === 'number' && isFinite(number)) {
    const numLength = ('' + number).length;
    return numLength;
       
    } else {
    return 'Pateikta netinkamo tipo reikšmė.';
        }
}
console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje('asd'));
console.log(skaitmenuKiekisSkaiciuje(NaN));

console.log('-------------------------');
console.log(4 + ' uzduotis');

function didziausiasSkaiciusSarase (sarasas) {
  if (Array.isArray(sarasas) && sarasas.length !== 0) { // kintamasis saraso tipo ir sarasas nera tuscias
      const max = Math.max(...sarasas); // atrenka didžiausią skaičių
      return max;
  } else if (sarasas.length === 0) { // sarasas yra tuscias, netinka -> sarasas = []
          return 'Pateiktas sąrašas negali būti tuščias.';
      } else {
          return 'Pateikta netinkamo tipo reikšmė.';
      }
  }

console.log(didziausiasSkaiciusSarase([1]));
console.log(didziausiasSkaiciusSarase([1, 2, 3]));
console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]));
console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66]));
console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]));
console.log(didziausiasSkaiciusSarase('pomidoras'));
console.log(didziausiasSkaiciusSarase([]));

console.log('-------------------------');
console.log(5 + ' uzduotis');

function isrinktiRaides(tekstas, raide) {
  if (typeof tekstas !== 'string') {      // b. patikrinti, ar pirmasis kintamasis yra teksto tipo, jei ne...
      return 'Pirmasis kintamasis yra netinkamo tipo.';
  } else if (tekstas.length === 0 && tekstas.length < 100) {     // c. patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių, jei ne...
      return 'Pirmojo kintamojo reikšmė yra netinkamo dydžio.';
  } else if (typeof raide !== 'number' && !isFinite(raide)) {      // d. patikrinti, ar antrasis kintamasis yra skaičiaus tipo, jei ne...
      return 'Antrasis kintamasis yra netinkamo tipo.'; 
  } else if (raide <= 0) {     // e. patikriname, ar antrojo kintamojo vertė yra didesnė už nulį, jei ne...
      return 'Antrasis kintamasis turi būti didesnis už nulį.';
  } else if (raide > tekstas.length) { //     f. patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
      return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.';
  } else {        // g. išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
      let raides = '';
      for (i = raide - 1; i < tekstas.length; i = i + raide) {
          raides = raides + tekstas[i]; // h. išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
      }
      return raides;
  }
}

console.log(isrinktiRaides('abcdefg', 2)); // rezultatas: “bdf”
console.log(isrinktiRaides('abcdefghijkl', 3)); // rezultatas: “cfil”
console.log(isrinktiRaides('abc', 0)); // “Antrasis kintamasis turi būti didesnis už nulį.”
console.log(isrinktiRaides('abc', 4)); // “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
console.log(isrinktiRaides(1561, 2)); // “Pirmasis kintamasis yra netinkamo tipo.”

console.log('-------------------------');
console.log(6 + ' uzduotis');

function dalyba (a, b) {
    if (typeof a !== 'number' && typeof b !== 'number'){
        return ('Abu kintamieji netinkamo tipo');
    } else if (typeof a !== 'number' || !isFinite (a) && typeof b === 'number'){
        return ('Pirmasis kintamasis yra netinkamo tipo');
    }  else if (typeof b !== 'number' || !isFinite (b) && typeof a === 'number'){
        return ('Antrasis kintamasis yra netinkamo tipo');
    } else {
        return a / b;
    }
}


console.log(dalyba(6, 'ggg'));
console.log(dalyba(10, 6));
console.log(dalyba(15, 5));
console.log(dalyba('abc', 'efg'));
console.log(dalyba(true, 25));

