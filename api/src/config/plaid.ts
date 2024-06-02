import { Configuration, PlaidApi, PlaidEnvironments } from "plaid";

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": process.env.CLIENT_ID,
      "PLAID-SECRET": process.env.SANDBOX_SECRET_KEY,
    },
  },
});

export const plaidClient = new PlaidApi(configuration);
