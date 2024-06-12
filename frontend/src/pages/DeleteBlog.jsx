import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBlog = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDeleteBlog = () => {
    setLoading(true);
    axios.delete(`http://127.0.0.1:4040/blogs/${id}`).then((res) => {
      alert(`Deleted blog with id: ${id} successfully!`);
      navigate("/");
    });
  };
  return (
    <div className="w-[50%] mx-auto my-32">
      <div className="p-4 border border-gray-300 rounded-md ">
        <h1 className="text-center font-bold text-xl text-red-400">
          Do yout want to delete blog have id: {id}
        </h1>
        <div className="flex justify-center my-2">
          <button
            onClick={handleDeleteBlog}
            className="w-[150px] px-4 py-2 rounded-md bg-red-400"
          >
            Yes, delete it!
          </button>
          <button
            onClick={() => navigate(`/blogs/detail/${id}`)}
            className="ml-4 w-[150px] px-4 py-2 rounded-md bg-blue-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBlog;
