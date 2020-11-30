var a;


function windowWidthInPx(){
	a=window.innerWidth;

		//Wypisywanie daty
	document.getElementById('windowWidth').innerText=a;

	setTimeout("windowWidthInPx()",10);
	if(a<1384 && a>992){
		document.getElementById("last-link").setAttribute("style", "display: none;");
	}
	if(a>1384 || a<992){
		document.getElementById("last-link").setAttribute("style", "display: visible;");
	}
	
	
}
