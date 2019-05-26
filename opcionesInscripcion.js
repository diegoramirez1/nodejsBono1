
let opciones = {
	nombreInteresado:{
		alias:'n',
		demand : true
	},
	idCurso:{
		alias:'c',
		demand : true
	},
	cedulaInteresado:{
		alias:'ced',
		demand : true
	}
};

let crearArchivoInscripcion = (nombre,cedula,curso) => {
	
	texto = 'El estudiante ' + nombre +
			' con cedula ' + cedula +
			' esta interesado es incribirse en el curso ' + curso.nombre +
			' con identificar ' + curso.id +
			' la solicitud fue realizada en fecha ' + Date.now();

	return texto;

}

let warningCursoInvalido = (curso) => {
	console.log('El id '+ curso + ' de momento no esta en nuestra oferta actual, por favor verifique el id y vuelva a intentar' + '\n');
}

module.exports = {
	crearArchivoInscripcion,
	opciones,
	warningCursoInvalido
};