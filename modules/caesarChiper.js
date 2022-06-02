module.exports = function (plainText, key) {
  encryptedText = '';
  for (const character of plainText) {
    encryptedText += shift(character, key);
  }
  return encryptedText;
};

function shift(character, key) {
  const charCode = character.charCodeAt(0);
  if (charCode === 32) {
    return ' ';
  } else if (charCode >= 65 && charCode <= 90) {
    return shiftLetter(charCode, key, 65, 90);
  } else if (charCode >= 97 && charCode <= 122) {
    return shiftLetter(charCode, key, 97, 122);
  }
  return String.fromCharCode(charCode);
}

function shiftLetter(charCode, key, start, end) {
  let shiftCode = charCode + key;
  if (shiftCode > end) {
    shiftCode = shiftCode - end + start - 1;
  } else if (shiftCode < start) {
    shiftCode = end - (start - shiftCode);
  }
  return String.fromCharCode(shiftCode);
}
