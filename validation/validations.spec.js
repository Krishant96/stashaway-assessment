const { portfolioValidation, amountAllocationValidation } = require('./validations.js');

describe("Portfolio Validation tests", () => {
  test("Successful portfolio validation", () => {
    const input_portfolios = {
      "portfolio_type": "high-risk",
      "amount": 10000,
      "amount_unit": "$"
    };

    const existing_portfolios = [
      {
        "portfolio_type": "high-risk",
        "amount": 50000,
        "amount_unit": "$"
      },
      {
        "portfolio_type": "retirement",
        "amount": 3100,
        "amount_unit": "$"
      }
    ];

    // arrange and act
    const result = portfolioValidation(input_portfolios, existing_portfolios);

    // assert
    expect(result).toBe(true);
  });

  test("Failing portfolio validation", () => {
    const input_portfolios = {
      "portfolio_type": "wrong-portfolio",
      "amount": 10000,
      "amount_unit": "$"
    };

    const existing_portfolios = [
      {
        "portfolio_type": "high-risk",
        "amount": 50000,
        "amount_unit": "$"
      },
      {
        "portfolio_type": "retirement",
        "amount": 3100,
        "amount_unit": "$"
      }
    ];

    // arrange and act
    const result = portfolioValidation(input_portfolios, existing_portfolios);

    // assert
    expect(result).toBe(false);
  });
});

describe("Amount allocation validation", () => {
  test("Successful amount allocation validation", () => {
    const deposit_funds = [
      {
        "amount": 10500,
        "amount_unit": "$"
      },
      {
        "amount": 100,
        "amount_unit": "$"
      }
    ];

    const total_one_time_allocation = 10500;

    // arrange and act
    const result = amountAllocationValidation(deposit_funds, total_one_time_allocation);

    // assert
    expect(result).toBe(true);
  });

  test("Failing amount allocation validation due to insufficient funds", () => {
    const deposit_funds = [
      {
        "amount": 10500,
        "amount_unit": "$"
      },
      {
        "amount": 200,
        "amount_unit": "$"
      }
    ];

    const total_one_time_allocation = 10000;

    // arrange and act
    const result = amountAllocationValidation(deposit_funds, total_one_time_allocation);

    // assert
    expect(result).toBe(false);
  });

  test("Failing amount allocation validation due to exceeding the deposit limit", () => {
    const deposit_funds = [
      {
        "amount": 10500,
        "amount_unit": "$"
      },
      {
        "amount": 100,
        "amount_unit": "$"
      }
    ];

    const total_one_time_allocation = 10700;

    // arrange and act
    const result = amountAllocationValidation(deposit_funds, total_one_time_allocation);

    // assert
    expect(result).toBe(false);
  });
});