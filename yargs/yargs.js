const crear = {
  tarea: {
    alias: "t",
    demand: true,
    description: "Nombre de la tarea",
  },
  estado: {
    alias: "e",
    default: true,
    description: "Estado de la tarea",
  },
};
const actualizar = {
  tarea: {
    alias: "t",
    demand: true,
    description: "Nombre de la tarea",
  },
  estado: {
    alias: "e",
    default: true,
    description: "Estado de la tarea",
  },
};
const eliminar = {
  tarea: {
    alias: "t",
    demand: true,
    description: "Nombre de la tarea",
  },
};
const yargs = require("yargs")
  .command("crear", "Comando para crear tarea", crear)
  .command("actualizar", "Comando para listar tareas", actualizar)
  .command("eliminar", "Comando para eliminar tareas", eliminar)
  .help().argv;

module.exports = {
  yargs,
};
