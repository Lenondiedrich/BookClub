import { Book } from "@/types/Book";
import { User } from "@/types/User";
import axios from "axios";

export interface SignInProps {
  email: string;
  password: string;
}

export interface SignUpProps {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export interface UpdateUserProps {
  userId: string;
  name: string;
  email: string;
  avatarUrl: string;
}

export interface CreateReviewProps {
  bookId: string
  userId: string
  rating: number;
  comment: string;
}

export const api = axios.create({
  baseURL: "http://localhost:3333",
});

export const getAllBooks = async () => {
  try {
    const { data } = await api.get("/books");

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getBookById = async (bookId: string) => {
  try {
    const { data } = await api.get<Book>(`/books/${bookId}`);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createReview = async ({bookId, userId, rating, comment}: CreateReviewProps) => {
  try {
    const { data } = await api.post(`/books/${bookId}/reviews`, {userId, rating, comment});

    return data;
  } catch (error) {
    console.error(error);
  }
};


export const updateUser = async ({
  userId,
  name,
  email,
  avatarUrl,
}: UpdateUserProps) => {
  try {
    const { data } = await api.put(`/users/${userId}`, {
      name,
      email,
      avatarUrl,
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getMe = async (userId: string) => {
  try {
    const { data } = await api.get<User>(`/me/${userId}`)
    return data
  } catch (error) {
    console.error(error)
  }
}

export const getIndications = async (userId: string) => {
  try {
    const { data } = await api.get(`/users/${userId}/indicate`)
    return data
  } catch (error) {
    console.error(error)
  }
}

export const getReviewsByUser = async (userId: string) => {
  try {
    const { data } = await api.get(`/users/${userId}/reviews`)
    
    return data;
  } catch(error) {
    console.error(error)
  }
}

export const getWishlistById = async (wishlistId: string) => {
  try {
    const { data } = await api.get(`/users/${wishlistId}/wishlist`)
    console.log(data)
    return data;
  } catch(error) {
    console.error(error)
  }
}