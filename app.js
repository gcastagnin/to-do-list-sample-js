
let idEditando = ""


let guardarTarea = function(){
	
	let textoTarea = document.querySelectorAll("#textoTarea")
	textoTarea = textoTarea[0]
	
	if (textoTarea.value == ""){
		alert("Tarea vacía!")
		return
	}


	let estado = document.querySelectorAll('#guardarTarea')
	estado = estado[0]

	if (estado.innerText == "Guardar tarea"){
		
		let tareaId = generarId()
		

		let vuelta = ingresarTextoTarea(tareaId, textoTarea.value)
	}
	else {


		let vuelta = editarTextoTarea(idEditando, textoTarea.value)

		let textoBoton = document.querySelectorAll("#guardarTarea")
		textoBoton = textoBoton[0]
		textoBoton.innerText = "Guardar tarea"

		let botonesBorrar = document.querySelectorAll(".borrarBoton")
		let botonesEditar = document.querySelectorAll(".editarBoton")
		
		for (var i = botonesBorrar.length - 1; i >= 0; i--) {
			botonesBorrar[i].disabled = false
		}

		 for (var i = botonesEditar.length - 1; i >= 0; i--) {
			botonesEditar[i].disabled = false
		}
	}

	textoTarea.value = ""
}


let generarId = function () {

	let v 	= 2
	let randomId = 'A' //Los id de los nodos no puden comenzar con numeros!!
	for (let i = v; i >= 0; i--) {
		if(i == 0){
			randomId += v0()
		} else {
			randomId += v0() + ""
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
	let listaTareas = document.querySelectorAll("#lista")
	listaTareas = listaTareas[0]
	template = `<li id="${tareaId}">
				<span class="resaltado">${textoTarea}</span>
					<ul>
						<li>
							<button type="button" class="editarBoton" onclick="editarTarea('${tareaId}')">Editar tarea</button> <button type="button" class="borrarBoton" onclick="eliminarTarea('${tareaId}')">Eliminar tarea</button>
						</li>
					</ul>
				</li><br id="br${tareaId}">`
	listaTareas.innerHTML = listaTareas.innerHTML + template
}


let editarTextoTarea = function(tareaId, textoTarea) {

	let tarea = document.querySelectorAll("#" + tareaId)
	tarea = tarea[0]
	template = `<li id="${tareaId}">
				<span class="resaltado">${textoTarea}</span>
					<ul>
						<li>
							<button type="button" class="editarBoton" onclick="editarTarea('${tareaId}')">Editar tarea</button> <button type="button" class="borrarBoton" onclick="eliminarTarea('${tareaId}')">Eliminar tarea</button>
						</li>
					</ul>
				</li>`
	tarea.innerHTML = template
}


let eliminarTarea = function(tareaId){
	let tarea = document.querySelectorAll("#" + tareaId)
	tarea = tarea[0]
	tarea.outerHTML = ""

	tarea = document.querySelectorAll("#br" + tareaId)
	tarea = tarea[0]
	tarea.remove()
}


let editarTarea = function(tareaId){

	let botonesBorrar = document.querySelectorAll(".borrarBoton")
	let botonesEditar = document.querySelectorAll(".editarBoton")
	
	for (var i = botonesBorrar.length - 1; i >= 0; i--) {
		botonesBorrar[i].disabled = true
	}

	 for (var i = botonesEditar.length - 1; i >= 0; i--) {
		botonesEditar[i].disabled = true
	}

	let tarea = document.querySelectorAll("#" + tareaId)
	tarea = tarea[0]
	
	let textoAEditar = document.querySelectorAll("#textoTarea")
	textoAEditar = textoAEditar[0]

	idEditando = tareaId

	let textoBoton = document.querySelectorAll("#guardarTarea")
	textoBoton = textoBoton[0]
	textoBoton.innerText = "Editar"


	let stringAQuitar = "Editar tarea Eliminar tarea"
	textoAEditar.value = tarea.innerText.substr(0, (tarea.innerText.length-stringAQuitar.length))
}
