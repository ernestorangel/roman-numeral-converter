function convertToRoman(num) {

  num = num + ''

  let romanNumeral = ''

  let stringSize = num.length;

  let unidade = +num.slice(stringSize-1)

  let dezena = +num.slice(stringSize-2, stringSize-1)

  let centena = +num.slice(stringSize-3, stringSize-2)

  let milhar;

  if (stringSize > 3) {
    milhar = +num.slice(-stringSize, stringSize-3)
  } else {
    milhar = 0
  }

  

  console.log(milhar, centena, dezena, unidade)

  if (milhar >= 1) {

    for (let i = 0; i < milhar; i++) {

      romanNumeral = romanNumeral + 'M'
    }

  }

  if (centena >= 1) {

    switch (centena) {

      case 1:
        romanNumeral = romanNumeral + 'C';
        break;
      case 2:
        romanNumeral = romanNumeral + 'CC';
        break;
      case 3:
        romanNumeral = romanNumeral + 'CCC';
        break;
      case 4:
        romanNumeral = romanNumeral + 'CD';
        break;
      case 5:
        romanNumeral = romanNumeral + 'D';
        break;
      case 6:
        romanNumeral = romanNumeral + 'DC';
        break;
      case 7:
        romanNumeral = romanNumeral + 'DCC';
        break;
      case 8:
        romanNumeral = romanNumeral + 'DCCC';
        break;
      case 9:
        romanNumeral = romanNumeral + 'CM';
        break;

    }

  }

  if (dezena >= 1) {

    switch (dezena) {

      case 1:
        romanNumeral = romanNumeral + 'X';
        break;
      case 2:
        romanNumeral = romanNumeral + 'XX';
        break;
      case 3:
        romanNumeral = romanNumeral + 'XXX';
        break;
      case 4:
        romanNumeral = romanNumeral + 'XL';
        break;
      case 5:
        romanNumeral = romanNumeral + 'L';
        break;
      case 6:
        romanNumeral = romanNumeral + 'LX';
        break;
      case 7:
        romanNumeral = romanNumeral + 'LXX';
        break;
      case 8:
        romanNumeral = romanNumeral + 'LXXX';
        break;
      case 9:
        romanNumeral = romanNumeral + 'XC';
        break;

    }

  }

  if (unidade >= 1) {

    switch (unidade) {

      case 1:
        romanNumeral = romanNumeral + 'I';
        break;
      case 2:
        romanNumeral = romanNumeral + 'II';
        break;
      case 3:
        romanNumeral = romanNumeral + 'III';
        break;
      case 4:
        romanNumeral = romanNumeral + 'IV';
        break;
      case 5:
        romanNumeral = romanNumeral + 'V';
        break;
      case 6:
        romanNumeral = romanNumeral + 'VI';
        break;
      case 7:
        romanNumeral = romanNumeral + 'VII';
        break;
      case 8:
        romanNumeral = romanNumeral + 'VIII';
        break;
      case 9:
        romanNumeral = romanNumeral + 'IX';
        break;

    }

  }

  console.log(num + ': ' + romanNumeral)

  return romanNumeral

}


convertToRoman(36)