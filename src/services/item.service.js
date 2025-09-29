import api from "./api.js";
const ITEM_API = import.meta.env.VITE_ITEMS_API;

//get all restataurant
const getAllItem = async () => {
  return await api.get(ITEM_API);
};

//get restaurant by ID
const getItemById = async (id) => {
  return await api.get(`${ITEM_API}/${id}`);
};
//update restaurant by ID
const editItemById = async (id, book) => {
  return await api.put(`${ITEM_API}/${id}`, book);
};

//add restaurant
const createItem = async (book) => {
  return await api.post(`${ITEM_API}`, book);
};
//delete restaurant
const deleteItem = async (id) => {
  return await api.delete(`${ITEM_API}/${id}`);
};

const BookService = {
  getAllItem,
  getItemById,
  editItemById,
  createItem,
  deleteItem,
};

export default BookService;
