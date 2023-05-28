import { StaticImageData } from "next/image";

export interface Book {
  title: string;
  image: string | StaticImageData;
  author: string;
  id: string;
  reviews?: number;
  rating?: number;
}