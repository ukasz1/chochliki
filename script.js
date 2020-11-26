




//console.log("window.innerWidth: "+window.innerWidth);

function czas(){
	var a=window.innerWidth;

		//Wypisywanie daty
	document.getElementById('windowWidth').innerText=a;

	setTimeout("czas()",10);
}