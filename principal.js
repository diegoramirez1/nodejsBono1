const cursos = require ('./datosCursos');
const estudiantes = require ('./opcionesInscripcion');
const express = require('express')
const app = express()

const argv = require ('yargs')
				.command('inscribir','Realizar proceso de inscripcion',estudiantes.opciones)
				.argv;


if(argv._ == "inscribir"){
	
	

	// validando existencia del curso
	if ( typeof(cursos.cursoPorID(argv.c)) === 'undefined' ) {
		estudiantes.warningCursoInvalido(argv.c);
		cursos.todosCursos();
		process.exit();
	}
		
	// el curso existe se procede con la inscripcion
	cursos.describirCurso(cursos.cursoPorID(argv.c));
	let mens = estudiantes.crearArchivoInscripcion(argv.n,argv.ced,cursos.cursoPorID(argv.c));
	
	console.log('Inscripcion procesada exitosamente en su navegador puede ver la informacion en http://localhost:3000/');


	app.get('/', function (req, res) {
	res.send(mens);
	})

	app.listen(3000);
	
}else{
	
	for (i = 1; i <= (cursos.ofertaCursos).length; i++) {
		cursos.describirCursoDelay(cursos.cursoPorID(i),function(resultado){
			console.log(resultado);
		});
	}
	
}
	