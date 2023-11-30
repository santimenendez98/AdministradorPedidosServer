import mongoose, { Schema } from "mongoose";

const appointmentSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  pedidoID: {
    type: Number,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  numero: {
    type: Number,
    required: true,
  },
  pedido: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  estado: {
    type: Boolean,
    required: true,
  },
});

const Appointment = mongoose.model("Pedido", appointmentSchema);

export default Appointment;
