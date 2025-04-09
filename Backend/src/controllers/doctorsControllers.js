const doctorsControllers = {};
import doctorsModel from "../models/Doctors.js";

// SELECT
doctorsControllers.getdoctors = async (req, res) => {
    const doctors = await doctorsModel.find();
    res.json(doctors);
  };
  

  
  // DELETE
  doctorsControllers.deletedoctors = async (req, res) => {
  const deletedoctors = await doctorsModel.findByIdAndDelete(req.params.id);
    if (!deletedoctors) {
      return res.status(404).json({ message: "doctors dont find" });
    }
    res.json({ message: "doctors deleted" });
  };
  
  // UPDATE
  doctorsControllers.updatedoctors = async (req, res) => {
    // Solicito todos los valores
    const {nombre,especialidad,correo,contraseña  } = req.body;
    // Actualizo
    await doctorsModel.findByIdAndUpdate(
      req.params.id,
      {
        nombre,
        especialidad,
        correo,
        contraseña
      },
      { new: true }
    );
    // muestro un mensaje que todo se actualizo
    res.json({ message: "doctors update" });
  };
  
  export default doctorsControllers;