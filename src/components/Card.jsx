import Swal from "sweetalert2";
import BookService from "../services/book.service";

const Card = (props) => {
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "you want to DELETE!",
      icon: "warning",
      confirmButtonText: "Yes",
    });
    if (!result.isConfirmed) return;

    try {
      const response = await BookService.deleteBook(id);
      if (response.status === 200) {
        await Swal.fire("Deleted!", "Restaurant has been deleted.", "success");
        window.location.reload();
      }
    } catch (error) {
      Swal.fire({
        title: "Delete Failed",
        icon: "error",
        text: error?.response?.data?.message || error.message,
      });
    }
  };

  return (
    
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={props.coverImage} alt={props.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {props.title}
        </h2>
        <p>Author: {props.author}</p>
        <p>Category: {props.category}</p>
        <p>Publish Year: {props.publishYear}</p>
        <p>ISBN: {props.isbn}</p>
        <p>Publisher: {props.publisher}</p>
        <p>Edition: {props.edition}</p>
        <p>Page Count: {props.pageCount}</p>
        <p>Language: {props.language}</p>
        <p>Genre: {props.genre}</p>
        <p>Description: {props.description}</p>
        <p>Location: {props.location}</p>
        <p>Added Date: {props.addedDate}</p>

        <div className="card-actions justify-end">
          <button
            onClick={() => handleDelete(props.itemId)}
            className="btn btn-soft btn-error"
          >
            Delete
          </button>
          <a
            href={"/update/" + props.itemId}
            className="btn btn-soft btn-warning"
          >
            Edit
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
