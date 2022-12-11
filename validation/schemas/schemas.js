const Joi = require('joi');

exports.schemas = {
  // Validation schema for input data
  input: Joi.object().keys({
    deposit_plans: Joi.array().items(
      {
        deposit_type: Joi.string().valid('one-time', 'monthly').required(),
        portfolios: Joi.array().items(
          {
            portfolio_type: Joi.string().required(),
            amount: Joi.number().min(0).integer().required(),
            amount_unit: Joi.string().required()
          }
        )
      }
    ),
    deposit_funds: Joi.array().items(
      {
        amount: Joi.number().min(0).integer().required(),
        amount_unit: Joi.string().required()
      }
    )
  })

  // Define all other validation schemas below
};