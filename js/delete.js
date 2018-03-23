// Za prvi iks, za prvo dilitovanje DOM elementa.
var elistener = document.getElementById("delete");
if(elistener){
	elistener.addEventListener("click", del);
}

function del(){
	sessionStorage.setItem("deletedis", "yes");
	window.location.reload();
}

window.addEventListener("load", function(){
	var parent = document.getElementById("div1");
	var child = document.getElementById("annihilation");
	var deletedis = sessionStorage.getItem("deletedis");
	if(deletedis === "yes"){
		parent.removeChild(child);
	}
});

// Za drugo iks, za drugo dilitovanje DOM elementa.
var elistenerb = document.getElementById("change");
if(elistenerb){
	elistenerb.addEventListener("click", delb);
}

function delb(){
	sessionStorage.setItem("deletedisb", "yes");
	window.location.reload();
}

window.addEventListener("load", function(){
	var parent = document.getElementById("div1");
	var child = document.getElementById("bombcity");
	var deletedisb = sessionStorage.getItem("deletedisb");
	if(deletedisb === "yes"){
		parent.removeChild(child);
	}
});

// Za trece iks, za trece dilitovanje DOM elementa.
var elistenerc = document.getElementById("buy2");
if(elistenerc){
	elistenerc.addEventListener("click", delc);
}

function delc(){
	sessionStorage.setItem("deletedisc", "yes");
	window.location.reload();
}

window.addEventListener("load", function(){
	var parent = document.getElementById("div1");
	var child = document.getElementById("commuter");
	var deletedisc = sessionStorage.getItem("deletedisc");
	if(deletedisc === "yes"){
		parent.removeChild(child);
	}
});


