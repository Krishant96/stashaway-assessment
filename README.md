# stashaway-assessment

## Assumptions:
```
- Deposit funds value should always equal to the total value of deposit plan's accumulated amounts
  e.g. : If one-time deposit plan allocated 10000 to one portfolio and 500 to a different portfolio, then deposit fund should always be 10500.
- Deposit funds value that does not match the equal total value of deposit plans will be ignored.
  e.g. : Assuming one-time deposit plan allocated 10000 to one portfolio and 500 to a different portfolio, if deposit fund is below or above 10500, 
  then deposit fund will be ignored.
- Deposit plans should not pass in plans for portfolios that do not exist
```

## Setup

- Install dependencies
``` bash
npm install
```

- Define input in input.json
e.g. :
``` json
{
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
}

```

- Run script when input has been defined
``` bash
node index.js
```

- Outputs will be saved in portfolios.json
``` json
{
  "portfolios": [
    { "portfolio_type": "high-risk", "amount": 0, "amount_unit": "$" },
    { "portfolio_type": "retirement", "amount": 0, "amount_unit": "$" }
  ]
}

```

- Running tests
``` bash
npm run test
```