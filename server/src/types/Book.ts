import { Genre } from "./Genre"

export type Book = {
  id:         string 
  title:      string
  image:      string
  author:     string
  reviews:    number
  rating:     number
  synopsis:   string
  genres:     Genre[]
  wishListId?: string
}