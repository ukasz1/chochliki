var a;


function windowWidthInPx(){
	a=window.innerWidth;

		
	document.getElementById('windowWidth').innerText=a;

	setTimeout("windowWidthInPx()",10);
	
	if(a<1384 && a>992){

		//document.getElementById('last-link').setAttribute('style', 'display: none;');
		document.getElementById('last-link').style.display="none";
		
	}
	if(a>1384 || a<992){

		//document.getElementById('last-link').setAttribute('style', 'display: initial;');
		document.getElementById('last-link').style.display='initial';
	}
	
	if(a<992){
		//document.getElementById('ul-list').setAttribute('style', 'border-right: 0;');
		document.getElementById('ul-list').style.borderRight="0";
	}
	else
		document.getElementById('ul-list').style.borderRight="3px groove";
	
	
}
