import express from "express";
import appointment from "./appointment.js";

const router = express.Router();

router.use("/pedidos", appointment);

export default router;
