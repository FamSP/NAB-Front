import api from "./api.js";
const BOOK_API = import.meta.env.VITE_BOOKS_API;

//get all restataurant
const getAllBooks = async () => {
  return await api.get(BOOK_API);
};

//get restaurant by ID
const getBookById = async (id) => {
  return await api.get(`${BOOK_API}/${id}`);
};
//update restaurant by ID
const editBookById = async (id, book) => {
  return await api.put(`${BOOK_API}/${id}`, book);
};

//add restaurant
const createBook = async (book) => {
  return await api.post(`${BOOK_API}`, book);
};
//delete restaurant
const deleteBook = async (id) => {
  return await api.delete(`${BOOK_API}/${id}`);
};

const BookService = {
  getAllBooks,
  getBookById,
  editBookById,
  createBook,
  deleteBook,
};

export default BookService;
