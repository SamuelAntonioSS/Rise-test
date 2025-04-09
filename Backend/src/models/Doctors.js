/*
  Campos:
     nombre
     especialidad
     correo
     contraseña

*/

import { Schema, model } from "mongoose";

const doctorsSchema = new Schema(
  {
    name:{
      type: String,
      require: true,
    },
    especialidad:{
      type: String,
      require: true,
    },
    correo:{
      type: String,
    },
    contraseña:{
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("doctors", doctorsSchema);

