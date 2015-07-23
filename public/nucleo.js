/* MANAGE DOMS */
function crear(padre,hijo,nomId,ruta,fin){
   	var child = document.createElement(hijo);
   	child.setAttribute("controls", "controls");
	child.setAttribute("id", nomId);
	child.setAttribute("src", ruta);
	child.setAttribute("onended", fin);
	var parent = document.getElementById(padre);
	parent.appendChild(child);
}

function eliminar(padre, nomId){
	var parent = document.getElementById(padre);
	var child = document.getElementById(nomId);
	parent.removeChild(child);
}
/* END MANAGE DOMS */


/* LIST */
function playList(idViejo,inicio,fin) {
		if (inicio==fin) {
			eliminar("div1",idViejo);
		}else{
			eliminar("div1",idViejo);
			crear("div1","audio",idViejo,"video/"+inicio+".mp3","playList("+'idViejo'+","+inicio+","+fin+");");
			var track = document.getElementById(idViejo);
			track.play();
		};
		inicio++;
}
/* END LIST */




/*function pauseAud() { 
    aud.pause(); 
}

function audioEnded() {
    alert('audio ended');
}*/