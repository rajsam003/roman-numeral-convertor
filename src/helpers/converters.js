import { ROMAN_LETTERS_ARRAY, ROMAN_NUMERALS_KEY_OBJ } from "./constants";

export function convertToRoman(num) {
  if (!+num) return false;
  var digits = String(+num).split(""),
    key = ROMAN_LETTERS_ARRAY,
    roman = "",
    i = 3;

  while (i--) roman = (key[+digits.pop() + i * 10] || "") + roman;

  return Array(+digits.join("") + 1).join("M") + roman;
}

export function convertFromRoman(string) {
  var str = string.toUpperCase(),
    validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/,
    token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,
    key = ROMAN_NUMERALS_KEY_OBJ,
    num = 0,
    m;

  if (!(str && validator.test(str))) return false;

  while ((m = token.exec(str))) num += key[m[0]];

  return num;
}
