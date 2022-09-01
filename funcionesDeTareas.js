const fs = require("fs");


let funcionesDeTareas = {
    archivo: './tareas.json',
    leerJson: function(){
        let tareasJson = fs.readFileSync(this.archivo, "utf-8")
        let tareasParseadas = JSON.parse(tareasJson);
        return tareasParseadas
    },
    agregarTarea: function (titulo, estado){
        let nuevaTarea = {
            titulo: titulo,
            estado: estado,
        }
        let tareasAnteriores = this.leerJson()
        tareasAnteriores.push(nuevaTarea)
        this.escribirJson(tareasAnteriores)
        
        
    },
    escribirJson: function (data){
        let nuevoJson = JSON.stringify(data)
        fs.writeFileSync(this.archivo, nuevoJson, "utf-8");

    },
    deshacer: function(){
        let tareas = this.leerJson();
        tareas.pop();
        this.escribirJson(tareas)
    },
    filtrarPorEstado: function(estado){
        let tareas = this.leerJson();
        let tareasFiltradasPorEstado  = tareas.filter((tarea)=> tarea.estado == estado);
        return tareasFiltradasPorEstado;

    }

}
module.exports = funcionesDeTareas