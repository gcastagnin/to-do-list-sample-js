
let guardarTarea = function(){

	let estado = document.querySelectorAll('#guardarTarea')
	estado = estado[0]
	if (estado.innerText == "Guardar tarea"){
		console.log("Guardar")
	let tareaId = generarId()
	let textoTarea = document.querySelectorAll("#textoTarea")
	textoTarea = textoTarea[0]
	let vuelta = ingresarTextoTarea(tareaId, textoTarea.value)

	}
	else {console.log("Editar")}

}


let generarId =function () {

	let v 	= 4
	let randomId = ''
	for (let i = v; i >= 0; i--) {
		if(i == 0){
			randomId += v0()
		} else {
			randomId += v0() + "-"
		}
	}
	return(randomId)

}


let v0 = function () {
	let idDiccionario = []
		let hexadecimal = dicHexadecimal()

		for (var i = hexadecimal.length - 1; i >= 0; i--) {
		 	let diccionarioSize = idDiccionario.push (hexadecimal[i])
		 } 

	let RandN 	= 0
	let psw 	= ''
	let lg 		= 4 // Evitar numeros negativos

	for (let i = 0; i < lg; i++) {
		psw += idDiccionario[Math.floor(Math.random() * idDiccionario.length)]
			}
		return psw;
}

let dicHexadecimal = function () {
	let hexadeciMayusculas 	= [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F']
	return(hexadeciMayusculas)
}

let ingresarTextoTarea = function (tareaId, textoTarea) {

	console.log(tareaId, textoTarea)
	let listaTareas = document.querySelectorAll("#lista")
	listaTareas = listaTareas[0]
	template = `<li id="#${tareaId}">
				${textoTarea}
				<ul>
				<li><button type="button" onclick="editarTarea(${tareaId})">Editar tarea</button> <button type="button" onclick="eliminarTarea(${tareaId})">Eliminar tarea</button>
				</li>
				</ul>
				</li>`
	listaTareas.innerHTML = listaTareas.innerHTML + template
}


let editarTarea = function(tareaId){
	
}
//Al dar click en un editar voy a cambiar el texto del boton guardar por editar,
// asi se si debo generar un id nuevo
//o copiar el que guarde al dar editar en un input hidden
// <li id="1">Coffee <button type="button" onclick="guardarTarea()">Guardar tarea</button> <button type="button" onclick="guardarTarea()">Guardar tarea</button></li>
// <li id="2">Tea <button type="button" onclick="guardarTarea()">Guardar tarea</button> <button type="button" onclick="guardarTarea()">Guardar tarea</button></li>
// <li id="3">Milk <button type="button" onclick="guardarTarea()">Guardar tarea</button> <button type="button" onclick="guardarTarea()">Guardar tarea</button></li>