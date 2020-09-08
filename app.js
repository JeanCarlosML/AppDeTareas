const argv = require("./yargs/yargs").yargs;
const tareaFunctions = require("./tarea-functions/tarea-functions");
const comando = argv._[0];

switch (comando) {
  case "crear":
    tareaFunctions.crearTarea(argv.tarea, Boolean(argv.estado));
    break;
  case "actualizar":
    console.log("Comando que actualiza");
    break;
  case "listar":
    tareaFunctions.listarTareas();
    break;
  case "eliminar":
    tareaFunctions.eliminarTarea(argv.tarea);
    break;
  default:
    console.log("Comando no reconocido");
    break;
}
