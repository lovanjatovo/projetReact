// src/controllers/authRouter.ts

import { Router } from 'express';
import { login } from './studentController';

const router = Router();

router.post('/login', login);

export default router;