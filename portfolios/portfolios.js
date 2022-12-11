const fs = require('fs');

// Get portfolios from portfolio.json
exports.getPortfolios = () => {
  // Read portfolios.json
  let portfolio = fs.readFileSync('portfolios.json');
  let portfolioData = JSON.parse(portfolio);

  return portfolioData;
};

// Update portfolios to portfolios.json
exports.updatePortfolio = (portfolios) => {
  // write final object to portfolios.json
  let data = JSON.stringify(portfolios);
  fs.writeFileSync('portfolios.json', data);

  return true;
};