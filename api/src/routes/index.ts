import { Router } from "express";

import webhookRouter from "./webhooks";
import userRouter from "./users";

const router = Router();

router.use("/webhook", webhookRouter);
router.use("/users", userRouter);

export default router;
