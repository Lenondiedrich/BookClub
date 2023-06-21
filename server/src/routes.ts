import express from 'express'
import { authController } from './controllers/AuthController';
import { bookController } from './controllers/BookController';
import { userController } from './controllers/UserController';

const router = express.Router();

router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);
router.post('/books/:id/reviews', bookController.rating);
router.get('/books/:id', bookController.getBook);
router.get('/books', bookController.getAllBooks)
router.delete('/books/:id', bookController.deleteBook);
router.post('/wishlist/:userId/:bookId', bookController.addToWishList)
router.put('/users/:userId', userController.updateProfile)
router.get('/users/:id/indicate', userController.indicateBook)
router.get('/users/:userId/reviews', userController.getUserReviews)
router.get('/users/:wishlistId/wishlist', userController.getWishListById)
router.get('/initial/:id/indicate', userController.indicateBookByBody)
router.get('/me/:id', userController.me)

export { router }