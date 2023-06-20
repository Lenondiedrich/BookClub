import axios from "axios"


const api = axios.create({
  baseURL: 'http://localhost:3333'
})

export const getAllBooks = async () => {
  try {
    const { data } = await api.get('/books')
    
    return data;
  } catch (error) {
    console.error(error)
  }
}

export const getBookById = async (bookId: string) => {
  try {
    const {data} = await api.get(`/books/${bookId}`)

    return data;
  } catch(error) {
    console.error(error)
  }
}