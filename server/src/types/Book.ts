import { Genre } from "./Genre"
import { Review } from "./Review"

export type Book = {
  id:         string 
  title:      string
  image:      string
  author:     string
  reviews:    Review[]
  rating:     number
  synopsis:   string
  genres:     Genre[]
  wishListId?: string
}