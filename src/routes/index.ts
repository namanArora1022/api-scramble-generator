import { Router } from "express";
import { getPuzzle } from "../controllers";

const router = Router();

router.get('/', getPuzzle);

export default router;