import React from "react";
import Card from "./Card";

const Books = ({ books }) => {
  return (
    <div className="flex">
      <div className="flex flex-wrap justify-center gap-4">
        {books.map((books) => (
          <div key={books.itemId}>
            <Card
              author={books.author}
              category={books.category}
              publisher={books.publishYear}
              isbn={books.isbn}
              publisher={books.publisher}
              edition={books.edition}
              pageCount={books.pageCount}
              language={books.language}
              genre={books.genre}
              description={books.description}
              location={books.location}
              addedDate={books.addedDate}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
