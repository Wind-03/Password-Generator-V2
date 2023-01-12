 
const chars = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const generatedPasswordContainers =
    document.querySelectorAll(".generatedPassword");
  const passwordLengthInput = document.querySelector("#length");
  
  function genPassword() {
    // console.log("password length: ", passwordLengthInput);
    // console.log("password length: ", generatedPasswordContainers);
    let passwordLength = Number(passwordLengthInput.value);
    for (let i = 0; i < generatedPasswordContainers.length; i++) {
      generatedPasswordContainers[i].value = getRandomPassword(passwordLength);
    }
  }
  
  function getRandomPassword(length) {
    let password = "";
    for (let i = 0; i <= length; i++) {
      let generate = chars[Math.floor(Math.random() * chars.length)];
      password += generate;
    }
    console.log("generated password: ", password);
    return password;
  }






