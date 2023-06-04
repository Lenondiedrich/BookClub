import { Review } from "./Review";
import { WishList } from "./WishList";

export type User = {
  id: string;
  email: string;
  password?: string;
  name: string;
  reviews?: Review[];
  wishList?: WishList[];
  avatarUrl?: string;
  createdAt: Date;
};
