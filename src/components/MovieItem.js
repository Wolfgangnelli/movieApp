import React, { useState } from "react";
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";

const MovieItem = ({ movie }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        key={movie.imdbID}
        className="flex flex-col items-center my-4 bg-cards flex-wrap"
      >
        <button className="mt-3 ml-3 mr-3 px-5">
          <img src={movie.Poster} alt={movie.Title} />
        </button>
        <div className="w-full p-4 flex flex-col items-center justify-between">
          <h5>
            <strong>{movie.Title}</strong>
          </h5>
          <button
            className="p-2 mt-2 bg-blue-500 hover:bg-blue-600 rounded"
            onClick={openModal}
          >
            VIEW DETAIL
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} onRequestClose={closeModal} ariaHideApp={false}>
        <Zoom>
          <button
            className="text-2xl font-bold text-black top-0 right-0 float-right cursor-pointer"
            onClick={closeModal}
          >
            X
          </button>
          <div className="flex flex-col md:flex-row w-2/3 mx-auto">
            <div className="p-2 md:p-4">
              <img src={movie.Poster} alt={movie.Title} />
            </div>
            <div className="p-2 md:p-4 flex flex-col justify-center">
              <h2>
                <strong>Title:</strong> {movie.Title}
              </h2>
              <p>
                <strong>Type:</strong> {movie.Type}
              </p>
              <p>
                <strong>Year:</strong> {movie.Year}
              </p>
              <p>
                <strong>imdbID:</strong> {movie.imdbID}
              </p>
            </div>
          </div>
        </Zoom>
      </Modal>
    </>
  );
};

export default MovieItem;
