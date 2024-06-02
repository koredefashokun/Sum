import { Router } from "express";

import webhookRouter from "./webhooks";

const router = Router();

router.use("/webhook", webhookRouter);

export default router;
