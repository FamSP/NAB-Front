import React from "react";
import Card from "./Card";

const Books = ({ books }) => {
  return (
    <div className="flex">
      <div className="flex flex-wrap justify-center gap-4">
        {books.map((book) => (
          <div key={book.itemId}>
            <Card {...book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
