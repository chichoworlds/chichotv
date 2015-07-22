function crear(padre,hijo,nomId){
   	var child = document.createElement(hijo);
   	child.setAttribute("controls", "controls");
	child.setAttribute("id", nomId);
	var parent = document.getElementById(padre);
	parent.appendChild(child);

}


function eliminar(padre, nomId){
	var parent = document.getElementById(padre);
	var child = document.getElementById(nomId);
	parent.removeChild(child);

}