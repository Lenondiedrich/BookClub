import express from 'express'
import { authController } from './controllers/AuthController';
import { bookController } from './controllers/BookController';

const router = express.Router();

router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login)
router.post('/books/:id/reviews', bookController.rating)
router.get('/books/:id', bookController.getBook)

export { router }