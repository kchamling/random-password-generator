const passwordBox = document.querySelector("#password");
const copyIcon = document.querySelector("#copy-icon");
const generatePasswordBtn = document.querySelector("#generate-btn");
const length = 12;

const numbers = "0123456789";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const symbols = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~';
const allChars = numbers + upperCase + lowerCase + symbols;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
}

const copyContent = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

generatePasswordBtn.addEventListener("click", () => {
  createPassword();
});
copyIcon.addEventListener("click", () => {
  copyContent(passwordBox.value);
});
