import React from "react";

let width = 30;
let height = 30;

export const BackIcon = () => {
  return (
    <svg
      viewBox="0 0 16 16"
      className="bi bi-arrow-left-circle rounded"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => {
        window.history.back();
      }}
      width={width}
      height={height}
    >
      <path
        fillRule="evenodd"
        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
      />
      <path
        fillRule="evenodd"
        d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
      />
    </svg>
  );
};

export const CartIcon = () => {
  return (
    <div className="icon-wrapper">
      <svg
        viewBox="0 0 16 16"
        className="bi bi-cart3 icon"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
      >
        <path
          fillRule="evenodd"
          d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
        />
      </svg>
    </div>
  );
};

export const JustifyIcon = () => {
  return (
    <div className="icon-wrapper">
      <svg
        viewBox="0 0 16 16"
        className="bi bi-justify icon"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
      >
        <path
          fillRule="evenodd"
          d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </div>
  );
};

export const UserIcon = () => {
  return (
    <div className="icon-wrapper">
      <svg
        viewBox="0 0 16 16"
        className="bi bi-person-circle icon"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
      >
        <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
        <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        <path
          fillRule="evenodd"
          d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
        />
      </svg>
    </div>
  );
};

export const SearchIcon = () => {
  return (
    <div className="icon-wrapper">
      <svg
        viewBox="0 0 16 16"
        className="bi bi-search icon"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
      >
        <path
          fillRule="evenodd"
          d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
        />
        <path
          fillRule="evenodd"
          d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
        />
      </svg>
    </div>
  );
};

export const Share = () => {
  return (
    <svg
      fill="currentColor"
      className="bi bi-share-fill rounded"
      viewBox="0 0 16 16"
      id="share-fill"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <path d="M11 2.5a2.5 2.5 0 11.603 1.628l-6.718 3.12a2.499 2.499 0 010 1.504l6.718 3.12a2.5 2.5 0 11-.488.876l-6.718-3.12a2.5 2.5 0 110-3.256l6.718-3.12A2.5 2.5 0 0111 2.5z" />{" "}
    </svg>
  );
};
