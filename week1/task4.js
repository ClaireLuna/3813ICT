"use strict";
var prompt = require("prompt");

prompt.start();

prompt.get(["firstNumber", "secondNumber"], (err, result) => {
  if (!isNaN(result.firstNumber) && !isNaN(result.secondNumber)) {
    console.log(
      "Sum of numbers is " +
        (parseInt(result.firstNumber) + parseInt(result.secondNumber))
    );
  }
  console.log("Prompt version is ^1.3.0");
});
