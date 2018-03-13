function mycss(){
	document.getElementById('landPage').style.backgroundImage = 'url("landingPage.png")';
}

var loadLandP = setTimeout(mycss, 3000);
window.onload(loadLandP);
