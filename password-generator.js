var generator = require("generate-password");

function generateRandomPassword() {
  var password = generator.generate({
    length: 10,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
  });

  console.log(password);
}

generateRandomPassword();
