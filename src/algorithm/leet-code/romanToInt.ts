function romanToInt(s: string): number {
  const chars = [...s];

  let sum = 0;
  for (let i = 0; i <= chars.length - 1; i++) {
    const char = chars[i];
    const prevChar = chars[i + 1];

    let int = 0;
    if (prevChar && isSubtractionInstance(char + prevChar)) {
      int = convertToNumber(char + prevChar);
      i++;
    } else {
      int = convertToNumber(char);
    }

    sum += int;
  }

  return sum;
}

function convertToNumber(chr: string) {
  switch (chr) {
    case 'I':
      return 1;
    case 'V':
      return 5;
    case 'X':
      return 10;
    case 'L':
      return 50;
    case 'C':
      return 100;
    case 'D':
      return 500;
    case 'M':
      return 1000;
    case 'IV':
      return 4;
    case 'IX':
      return 9;
    case 'XL':
      return 40;
    case 'XC':
      return 90;
    case 'CD':
      return 400;
    case 'CM':
      return 900;
    default:
      return 0;
  }
}

function isSubtractionInstance(str: string) {
  switch (str) {
    case 'IV':
    case 'IX':
    case 'XL':
    case 'XC':
    case 'CD':
    case 'CM':
      return true;
    default:
      return false;
  }
}

console.log(romanToInt('III'), romanToInt('LVIII'), romanToInt('MCMXCIV'));
