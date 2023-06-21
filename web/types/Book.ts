import { StaticImageData } from "next/image";
import { Review } from "./Review";

export interface Book {
  title: string;
  image: string | StaticImageData;
  author: string;
  id: string;
  reviews?: Review[];
  rating?: number;
  synopsis?: string;
  genre?: string;
  wishListId?: string;
}