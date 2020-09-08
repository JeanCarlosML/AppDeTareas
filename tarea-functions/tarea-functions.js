const fs = require("fs");

let dataList = [];
const cargarBd = () => {
  try {
    dataList = require("../bd/tareas.json");
  } catch (e) {
    dataList = [];
  }
};
const guardarBd = ()=>{
  let dataJson = JSON.stringify(dataList);
  fs.writeFile("./bd/tareas.json", dataJson, (err) => {
    if (err) throw new Error(console.log(err));
  });
}
const crearTarea = (info, estado = true) => {
  let data = {
    tarea: info,
    estado: estado,
  };
  cargarBd();
  dataList.push(data);
  let dataJson = JSON.stringify(dataList);
  fs.writeFile("./bd/tareas.json", dataJson, (err) => {
    if (err) throw new Error(console.log(err));
  });
};
const eliminarTarea = (info) => {
  cargarBd();
  let index = dataList.findIndex((data) => data.tarea === info);
  if (index >= 0) {
    console.log(index);
    dataList.splice(index, 1);
    guardarBd();
    console.log("Tarea eliminada");
  } else {
    console.log("No se encontro tarea");
  }
};
const listarTareas = () => {
  cargarBd();
  dataList.forEach((data) => {
    console.log("==========Tarea==========");
    console.log(`Tarea : ${data.tarea}`);
    console.log(`Estado : ${data.estado}`);
  });
};
module.exports = {
  crearTarea,
  eliminarTarea,
  listarTareas,
};
