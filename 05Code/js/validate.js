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

function validateRentName() {
    var expRegRName = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var RentName = document.getElementById("txtfullName");
    if (!expRegRName.exec(RentName.value)) {
        alert("Only write letters.");
        return false;
    } else {
        return true;
    }
}

function validateSName() {
    var expRegSName = /^[^ÑÁáÉéÍíÓóÚúÜü][^0-9][^#@-_:;,.%$/&][a-zA-Z\s]+$/;
    var SignName = document.getElementById("inputName");
    if (!expRegSName.exec(SignName.value)) {
        alert("Only write letters.");
        return false;
    } else {
        return true;
    }
}

function validateLName() {
    var expRegLName = /^[^ÑÁáÉéÍíÓóÚúÜü][^0-9][^#@-_:;,.%$/&][a-zA-Z\s]+$/;
    var LastName = document.getElementById("inputLname");
    if (!expRegLName.exec(LastName.value)) {
        alert("Only write letters.");
        return false;
    } else {
        return true;
    }
}

$(document).ready(function()) {
    $('#inputRpassword').keyup(function()){
        var inputPassword = $('#inputPassword').val();
        var inputRPassword = $('#inputRPassword').val();
        if (inputPassword==inputRPassword){
            $('#error').text('Match');
        }else{
            $('#error').text('Do no Match');
        }
        if (inputRPassword==""){
            $('#error').text('Cannot be left blank');
        }
    }
}