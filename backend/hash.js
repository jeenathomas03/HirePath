const bcrypt = require("bcryptjs");

bcrypt.hash("HirePathAdmin@2026", 10).then(hash => {
  console.log(hash);
});