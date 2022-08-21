//JavaScript Document
var expressions = {
    CardNumber: /^[0-9]{16}$/,
    onlyLetters: /^[a-zA-Z\s_\d]{1,30}$/,
    CVV: /^[0-9]{3}$/
}


function validateName() {
    var expRegName = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var NameName = document.getElementById("Name");
    if (!expRegName.exec(NameName.value)) {
        alert("Only write letters.");
        return false;
    } else {
        return true;

    }
}

function validateCardNumber() {
    var CardNumberName = document.getElementById('CardNumber').value;
    if (!(expressions.CardNumber).test(CardNumberName)) {
        alert("Invalid CardNumber!!");
    }
}

function validateCVV() {
    var CVVName = document.getElementById('CVV').value;
    if(!(expressions.CVV).test(CVVName)){
        alert("Invalid CVV!!")
    }
}

function validateExpiration(campo) {
    var RegExPattern = /^\d{1,2}\/\d{2,4}$/;
    if (!(campo.match(RegExPattern)) && (campo!='')) {
        alert("Invalid Date!!")
          return true;
    } else {
          return false;
    }
}