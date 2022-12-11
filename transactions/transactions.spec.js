const { deposit } = require('./transactions.js');
const { isValidJson } = require('../validation/validations.js');

describe("Deposit test", () => {
  test("Successful deposit test", () => {

    const inputData = {
      "deposit_plans": [
        {
          "deposit_type": "one-time",
          "portfolios": [
            {
              "portfolio_type": "high-risk",
              "amount": 10000,
              "amount_unit": "$"
            },
            {
              "portfolio_type": "retirement",
              "amount": 500,
              "amount_unit": "$"
            }
          ]
        },
        {
          "deposit_type": "monthly",
          "portfolios": [
            {
              "portfolio_type": "high-risk",
              "amount": 0,
              "amount_unit": "$"
            },
            {
              "portfolio_type": "retirement",
              "amount": 100,
              "amount_unit": "$"
            }
          ]
        }
      ],
      "deposit_funds": [
        {
          "amount": 10500,
          "amount_unit": "$"
        },
        {
          "amount": 100,
          "amount_unit": "$"
        }
      ]
    };

    // arrange and act
    let result = deposit(inputData);

    // assert
    expect(isValidJson(result)).toBe(true);
  });

  test("Failing deposit test due to incorrect portfolio type", () => {
    const inputData = {
      "deposit_plans": [
        {
          "deposit_type": "one-time",
          "portfolios": [
            {
              "portfolio_type": "highrisk",
              "amount": 10000,
              "amount_unit": "$"
            },
            {
              "portfolio_type": "retirement",
              "amount": 500,
              "amount_unit": "$"
            }
          ]
        },
        {
          "deposit_type": "monthly",
          "portfolios": [
            {
              "portfolio_type": "high-risk",
              "amount": 0,
              "amount_unit": "$"
            },
            {
              "portfolio_type": "retirement",
              "amount": 100,
              "amount_unit": "$"
            }
          ]
        }
      ],
      "deposit_funds": [
        {
          "amount": 10500,
          "amount_unit": "$"
        },
        {
          "amount": 100,
          "amount_unit": "$"
        }
      ]
    };

    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => { });

    // arrange and act
    deposit(inputData);

    // assert    // expect(result).toBe(3);
    expect(mockExit).toHaveBeenCalledWith(1);
  });

  test("Failing deposit test due to incorrect deposit type", () => {
    const inputData = {
      "deposit_plans": [
        {
          "deposit_type": "oneTime",
          "portfolios": [
            {
              "portfolio_type": "high-risk",
              "amount": 10000,
              "amount_unit": "$"
            },
            {
              "portfolio_type": "retirement",
              "amount": 500,
              "amount_unit": "$"
            }
          ]
        },
        {
          "deposit_type": "monthly",
          "portfolios": [
            {
              "portfolio_type": "high-risk",
              "amount": 0,
              "amount_unit": "$"
            },
            {
              "portfolio_type": "retirement",
              "amount": 100,
              "amount_unit": "$"
            }
          ]
        }
      ],
      "deposit_funds": [
        {
          "amount": 10500,
          "amount_unit": "$"
        },
        {
          "amount": 100,
          "amount_unit": "$"
        }
      ]
    };

    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => { });

    // arrange and act
    deposit(inputData);

    // assert    // expect(result).toBe(3);
    expect(mockExit).toHaveBeenCalledWith(1);
  });
});