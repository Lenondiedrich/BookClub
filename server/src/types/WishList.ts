import { Book } from "./Book"

export type WishList = {
  id:      string 
  user_id: string
  books:   Book[]
}