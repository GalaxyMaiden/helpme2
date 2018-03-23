var savea = document.getElementById("save3");
if(savea){
	savea.addEventListener("click", saveea);
}

var saveb = document.getElementById("save4");
if(saveb){
	saveb.addEventListener("click", saveeb);
}

function saveea(){
	var changename = document.getElementById("savenamemovie").value;
	document.getElementById("namemovie1").innerHTML = changename;
	sessionStorage.setItem("isChanged", "yes");
}

function saveeb(){
	var changegenre = document.getElementById("savegenremovie").value;
	document.getElementById("genremovie1").innerHTML = changegenre;
}

       
           

