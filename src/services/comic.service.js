import api from "./api.js";
const COMIC_API = import.meta.env.VITE_COMICS_API;

//get all restataurant
const getAllComic = async () => {
  return await api.get(COMIC_API);
};

//get restaurant by ID
const getComicById = async (id) => {
  return await api.get(`${COMIC_API}/${id}`);
};
//update restaurant by ID
const editComicById = async (id, book) => {
  return await api.put(`${COMIC_API}/${id}`, book);
};

//add restaurant
const createComic = async (book) => {
  return await api.post(`${COMIC_API}`, book);
};
//delete restaurant
const deleteComic = async (id) => {
  return await api.delete(`${COMIC_API}/${id}`);
};

const BookService = {
  getAllComic,
  getComicById,
  editComicById,
  createComic,
  deleteComic,
};

export default BookService;
