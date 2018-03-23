// Napravio sam clickEvent.
var el = document.getElementById("buyt");
if(el){
	el.addEventListener("click", buy);
}

// Funkcija da odradi formu, da ne dopusti da se submituje prazna.
function buy(){
	var owner = document.getElementById("owner").value
	var cvv = document.getElementById("cvvnumber").value
	var card = document.getElementById("cardnumber").value
	var title = document.getElementById("movtitle").value
	var contact = document.getElementById("contactnumber").value

	if(owner == "filip" && cvv == "123" && card == "123456789" && title == "The Commuter" && contact == "123456789"){
		alert("Successful payment, Your reservation is under your name(Owner) !");
		window.location.href = "../index.html"
	}

	else {
		alert("Please fill out the form !");
		return false;
	}
}
