// Stavio sam kad bilo ko ulazi na sajt, da ne moze da vidi ove entitete dok se ne uloguje.
document.getElementById("newprojection").style.display = "none";	
document.getElementById("buyticket").style.display = "none";
document.getElementById("newuser").style.display = "none";

// Funkcija, kad se admin ili guest uloguje, da vidi odredjene entitete.Stavio sam ih u sessionStorage da se ne bi gubili pri F5
var el = document.getElementById("login");
if(el){
	el.addEventListener('click', state);
}

function state(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if(username == "admin" && password == "admin"){
		sessionStorage.setItem("isAdmin", "yes");
		alert("You are logged in as ADMIN !");
		window.location.href = "../index.html";
	}

	else if(username == "guest" && password == "guest"){
		sessionStorage.setItem("isAdmin", "no");
		alert("You are logged in as GUEST !");
		window.location.href = "../index.html";
	}

	else{
		alert("Incorrect username or password, try again !")
	}
}

window.onload = function (){
	var isAdmin = sessionStorage.getItem("isAdmin");
	if(isAdmin === "yes"){
		document.getElementById("newprojection").style.display = "";
		document.getElementById("newuser").style.display = "";
		document.getElementById("delete").style.display = "";
		document.getElementById("change").style.display = "";
		document.getElementById("buy2").style.display = "";
		document.getElementById("savenamemovie").style.display = "";
		document.getElementById("savegenremovie").style.display = "";
		document.getElementById("save3").style.display = "";
		document.getElementById("save4").style.display = "";
	}

	else if(isAdmin === "no"){
		document.getElementById("buyticket").style.display = "";
		document.getElementById("buy").style.display = "";
		sessionStorage.removeItem("deletedis");
		sessionStorage.removeItem("deletedisb");
		sessionStorage.removeItem("deletedisc");
	}
};

// Isto kao i pocetak skripte...
document.getElementById("delete").style.display = "none";
document.getElementById("change").style.display = "none";
document.getElementById("buy").style.display = "none";
document.getElementById("buy2").style.display = "none";
document.getElementById("savenamemovie").style.display = "none";
document.getElementById("savegenremovie").style.display = "none";
document.getElementById("save3").style.display = "none";
document.getElementById("save4").style.display = "none";