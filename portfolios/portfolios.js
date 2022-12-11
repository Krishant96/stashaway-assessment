const fs = require('fs');

exports.getPortfolios = () => {
  // Read portfolios.json
  let portfolio = fs.readFileSync('portfolios.json');
  let portfolioData = JSON.parse(portfolio);

  return portfolioData;
};

exports.updatePortfolio = (portfolios) => {
  // write final object to portfolios.json
  let data = JSON.stringify(portfolios);
  fs.writeFileSync('portfolios.json', data);

  return true;
};