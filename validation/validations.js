// Validate if portfolios in deposit_plan exists in customers portfolios
exports.portfolioValidation = (input_portfolios, existing_portfolios) => {
  let portfolio_validation = existing_portfolios.find(portfolio => {
    return portfolio.portfolio_type === input_portfolios.portfolio_type;
  });

  // if undefined, throw error
  if (portfolio_validation === undefined) {
    return false;
  }

  return true;
};

// Validate if deposit_funds is enough to be allocated according to the deposit plans
exports.amountAllocationValidation = (deposit_funds, allocation) => {
  let total_amount_validation = deposit_funds.find(deposit_fund => {
    return deposit_fund.amount === allocation;
  });

  // if undefined, throw error
  if (total_amount_validation === undefined) {
    return false;
  }

  return true;
};

// Check if result is a valid json
exports.isValidJson = (text) => {
  if (typeof JSON.parse(text) === 'object') {
    return true;
  }

  return false;
};

// Check if input object is valid
exports.inputValidation = (schemas, input) => {
  const { error } = schemas.validate(input);
  if (error != null) {
    const { details } = error;
    const message = details.map((e) => e.message).join(',');
    console.log(message);
    process.exit(1);
  }
};