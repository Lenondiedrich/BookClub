export type Review = {
  id:      string 
  user_id: string
  rating:  number
  comment: string
  bookId?: string
}