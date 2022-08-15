// JavaScript Document
var expressions={
	user: /^[^FfDd][a-zA-Z]{2}[0-9]{4}$/,
	onlyLetters: /^[a-zA-Z\s-_\d]{1,30}$/,
	model:/^[a-zA-Z\s.-\d]{1,10}$/
}
//Valida solo letras
function validateUser(){
	var expRegName=/^[a-zA-ZÑÁáÉéÍíÓóÚúÜü\s]+$/;
	var userName=document.getElementById("inputuser");
	if(!expRegName.exec(userName.value)){
	   alert("Only write letters.");
		return false;
	}else{
		return true;
	}
}

function validatePlate(){
	var platename= document.getElementById("plate").value;
	if(!(expressions.plate).test(platename)){
	   window.alert("Invalid Plate !!");	
	}
}
//Valida numeros y letras
function validateModel(){
	let inp = document.getElementById("model").value;
	if(!(expressions.model).test(inp)){
	   return false;
	}
}