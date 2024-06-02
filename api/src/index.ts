import express from "express";
import { CountryCode, Products } from "plaid";

import { plaidClient } from "./config/plaid";
import router from "./routes";

const app = express();

app.use(express.json());

app.get("/health", (_, res) => {
  return res.status(200).json({
    success: true,
    message: "API healthy",
  });
});

app.use("/", router);

// Plaid code

app.post("/create-token", async (req, res) => {
  const clientUserId = "user-korede"; // FIXME: should be gotten from the database.

  try {
    const { data } = await plaidClient.linkTokenCreate({
      user: {
        client_user_id: clientUserId,
      },
      client_name: "Sum",
      products: [Products.Auth],
      language: "en",
      webhook: "https://webhook.example.com",
      redirect_uri: "https://domainname.com/oauth-page.html",
      country_codes: [CountryCode.Ca],
    });

    return res.status(201).json(data);
  } catch (error) {
    return res.status(400).json({
      message: "An error occured while trying to link Plaid account.",
      error,
    });
  }
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server listening on port ${process.env.PORT || 4000}`);
});
