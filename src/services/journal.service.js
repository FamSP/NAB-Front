import api from "./api.js";
const JOURNAL_API = import.meta.env.VITE_JOURNALS_API;

//get all restataurant
const getAllJournal = async () => {
  return await api.get(JOURNAL_API);
};

//get restaurant by ID
const getJournalById = async (id) => {
  return await api.get(`${JOURNAL_API}/${id}`);
};
//update restaurant by ID
const editJournalById = async (id, book) => {
  return await api.put(`${JOURNAL_API}/${id}`, book);
};

//add restaurant
const createJournal = async (book) => {
  return await api.post(`${JOURNAL_API}`, book);
};
//delete restaurant
const deleteJournal = async (id) => {
  return await api.delete(`${JOURNAL_API}/${id}`);
};

const BookService = {
  getAllJournal,
  getJournalById,
  editJournalById,
  createJournal,
  deleteJournal,
};

export default BookService;
