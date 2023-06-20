import express from 'express'
import { authController } from './controllers/AuthController';
import { bookController } from './controllers/BookController';
import { userController } from './controllers/UserController';

const router = express.Router();

router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);
router.post('/books/:id/reviews', bookController.rating);
router.get('/books/:id', bookController.getBook);
router.delete('/books/:id', bookController.deleteBook);
router.post('/wishlist/:userId/:bookId', bookController.addToWishList)
router.put('/users/:userId', userController.updateProfile)

export { router }