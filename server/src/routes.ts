import express from 'express'
import { authController } from './controllers/AuthController';

const router = express.Router();

router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login)

export { router }