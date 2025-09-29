import React, { useState } from "react";
import { useNavigate } from "react-router";
import BookService from "../services/item.service";
import Swal from "sweetalert2";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    publishYear: "",
    isbn: "",
    publisher: "",
    edition: "",
    pageCount: "",
    language: "",
    genre: "",
    description: "",
    coverImage: "",
    location: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const newBook = await BookService.createBook(book);
      if (newBook === 201) {
        Swal.fire({
          title: "Add new Book",
          text: "Add new book successfully!",
          icon: "success",
        }).then(() => {
          // resetForm();
          navigate("/");
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Add new book",
        text: error.message,
        icon: "error",
      });
    }
  };
  // const handleSubmit = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5000/api/v1/restaurant", {
  //       method: "POST",
  //       body: JSON.stringify(book),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     if (response.ok) {
  //       alert("Restaurannt Adds succesfully!!!");
  //       setBook({
  //         title: "",
  //         type: "",
  //         imageUrl: "",
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div class="relative flex flex-col justify-center h-screen overflow-hidden">
      <div className="container mx-auto">
        <div class="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
          <h1 class="text-2xl font-semibold text-center text-gray-700 mb-6">
            Add Item
          </h1>
          <div class="space-y-4">
            <div>
              <label class="label">
                <span class="text-base label-text">Title</span>
              </label>

              <input
                type="text"
                placeholder="Enter title"
                class="w-full input input-bordered"
                name="title"
                onChange={handleChange}
              />
            </div>

            <div>
              <label class="label">
                <span class="text-base label-text">Type</span>
              </label>
              <input
                type="text"
                placeholder="Enter type"
                class="w-full input input-bordered"
                name="type"
                onChange={handleChange}
              />
            </div>

            <div>
              <label class="label">
                <span class="text-base label-text">Image URL</span>
              </label>
              <input
                type="text"
                ClassName="grow"
                class="w-full input input-bordered"
                onChange={handleChange}
                placeholder="Restaurant imageUrl"
                name="imageUrl"
              />
            </div>

            <div class="flex justify-center items-center my-6 space-x-4">
              <button
                type="submit"
                class="btn bg-green-500 text-white px-6"
                onClick={handleSubmit}
              >
                Add
              </button>
              <a
                href={"/"}
                button
                type="button"
                class="btn bg-red-500 text-white px-6"
              >
                Cancel
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
