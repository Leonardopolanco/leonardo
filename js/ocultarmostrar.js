/*
 * Funciones para ocultar/mostrar un DIV (o cualquier objeto que soporte la propiedad style.visibility).
 * El objeto se mostrar tras un RETARDO especificado.
 * Al ocultarlo si se estaba esperando a mostrar otro objeto, cancela la operacion anterior.
 * A usar por el usuario:
 *      mostrarTimeDIV(id)	:: Muestra el objeto. 'id' es el id del objeto a mostrar.
 *      ocultarDIV()		:: Oculta el objeto mostrado anteriormente.
 *		RETARDO				:: Especificar aqui el numero de milisegundos a esperar para mostrar el objeto.
 */
	
	var RETARDO = 300;
	var idDIV;
	var idTimeout = 0;
	
	/* Devuelve el objeto con el id especificado. */
	function get(id){
		return document.getElementById(id);
	}
	
	/* Muestra el DIV guardado en idDIV */
	function mostrarDIV(){
		get(idDIV).style.visibility = 'visible';
	}
	
	/* Oculta el DIV giardado en idDIV. 
	 * Si se estaba esperando a mostrar otro DIV se candela el proceso.
	 */
	function ocultarDIV(){
		clearTimeout(idTimeout);
		get(idDIV).style.visibility = 'hidden';
	}
	
	/* Muestra un DIV con el id especificado con un retardo. */
	function mostrarTimeDIV(id){
		idDIV = id;
		idTimeout = setTimeout("mostrarDIV();", RETARDO); 
	}