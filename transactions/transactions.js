const { schemas } = require('../validation/schemas/schemas.js');
const { getPortfolios, updatePortfolio } = require('../portfolios/portfolios.js');
const { portfolioValidation, inputValidation } = require('../validation/validations.js');

exports.deposit = (inputData) => {
  try {
    // Validate user input
    inputValidation(schemas.input, inputData);

    // Get deposit plans and funds from input
    const deposit_plans = inputData.deposit_plans;
    const deposit_funds = inputData.deposit_funds;

    // Get existing portfolios
    const portfolioData = getPortfolios();
    const portfolios = portfolioData.portfolios;

    deposit_funds.forEach(deposit_fund => {
      deposit_plans.forEach(deposit_plan => {
        let total_deposit_plan_amount = 0;

        deposit_plan.portfolios.forEach(deposit_plan_portfolio => {
          // Check if portfolios exists
          if (!portfolioValidation(deposit_plan_portfolio, portfolios)) {
            console.log(`${deposit_plan_portfolio.portfolio_type} portfolio does not exist.`);
            process.exit(1);
          }

          total_deposit_plan_amount += deposit_plan_portfolio.amount;
        });

        // If deposit fund amount is sufficient
        if (deposit_fund.amount === total_deposit_plan_amount) {
          deposit_plan.portfolios.forEach(deposit_plan_portfolio => {
            portfolios.forEach(portfolio => {
              // Add deposit fund amount to existing portfolio amount
              if (deposit_plan_portfolio.portfolio_type === portfolio.portfolio_type) {
                portfolio.amount += deposit_plan_portfolio.amount;
              }
            });
          });
        }
      });

      portfolioData.portfolios = portfolios;

      // Update portfolios
      updatePortfolio(portfolioData);
    });

    console.log(JSON.stringify(portfolioData));
    return JSON.stringify(portfolioData);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};