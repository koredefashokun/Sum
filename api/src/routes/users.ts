import { Router } from "express";

const userRouter = Router();

userRouter.post("/register", async (req, res) => {});

userRouter.post("/authenticate", async (req, res) => {});

userRouter.get("/", async (req, res) => {});

userRouter.get("/:id", (req, res) => {});

userRouter.put("/:id");

export default userRouter;
