// Add to server/src/middleware/validateJob.js
const Joi = require('joi');

const validateJob = (req, res, next) => {
    const schema = Joi.object({
        title: Joi.string().min(3).required(),
        company: Joi.string().required(),
        type: Joi.string().valid('Full-time', 'Part-time').required(),
        location: Joi.string().required(),
        description: Joi.string().min(20).required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};