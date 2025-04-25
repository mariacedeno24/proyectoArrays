import Cl_mEstudiante from "./js/Cl_mEstudiante.js";
import Cl_mEstudiantes from "./js/Cl_mEstudiantes.js";
import Cl_mMaterias from "./js/Cl_mMaterias.js";
export default class Cl_mSemestre extends Cl_mEstudiantes{
    constructor (nombre){
        super (nombre);
    let materias = [Cl_mMaterias()];
    let estudiantes = [Cl_mEstudiante()];
    }

}
