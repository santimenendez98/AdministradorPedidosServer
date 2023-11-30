import Joi from "joi";

const validateEdition = (req, res, next) => {
  const validateAppointment = Joi.object({
    nombre: Joi.string()
      .min(4)
      .max(10)
      .pattern(/^[A-Za-z\s]+$/)
      .message({ "string.pattern.base": "Name should be only letters" }),
    apellido: Joi.string()
      .min(4)
      .max(10)
      .pattern(/^[A-Za-z\s]+$/)
      .message({ "string.pattern.base": "Last Name should be only letters" }),
    pedidoID: Joi.number().min(1),
    numero: Joi.number().min(1),
    direccion: Joi.string().min(6),
    pedido: Joi.string(),
    total: Joi.number().min(1),
    estado: Joi.boolean(),
  });

  const validation = validateAppointment.validate(req.body);

  if (!validation.error) return next();

  return res.status(400).json({
    message: validation.error.details[0].message,
    error: true,
  });
};

const validateCreation = (req, res, next) => {
  const validateAppointment = Joi.object({
    nombre: Joi.string()
      .min(4)
      .max(10)
      .pattern(/^[A-Za-z\s]+$/)
      .message({ "string.pattern.base": "Name should be only letters" })
      .required(),
    apellido: Joi.string()
      .min(4)
      .max(10)
      .pattern(/^[A-Za-z\s]+$/)
      .message({ "string.pattern.base": "Last Name should be only letters" })
      .required(),
    pedidoID: Joi.number().min(1).required(),
    numero: Joi.number().min(1).required(),
    direccion: Joi.string().min(6).required(),
    pedido: Joi.string().required(),
    total: Joi.number().min(1).required(),
    estado: Joi.boolean().required(),
  });

  const validation = validateAppointment.validate(req.body);

  if (!validation.error) return next();

  return res.status(400).json({
    message: validation.error.details[0].message,
    error: true,
  });
};

const exportValidation = { validateCreation, validateEdition };

export default exportValidation;
