// JavaScript Document

function login(password,usuario){ 
	var user=document.getElementById(usuario);
	var pass=document.getElementById(password);
	if (user.value=="admin" && pass.value=="admin") { 
		window.open("../html/welcome.html",'_self')
	} else{
		window.alert("Wrong Username or Password");
	}
} 