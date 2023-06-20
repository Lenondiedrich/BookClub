export type Review = {
  id:      string 
  user_id: string
  rating:  number
  comment: string
  book_id?: string
}