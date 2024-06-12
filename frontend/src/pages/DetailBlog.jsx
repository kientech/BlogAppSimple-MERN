import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const DetailBlog = () => {
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://127.0.0.1:4040/blogs/${id}`)
      .then((res) => {
        setBlog(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("🚀 ~ axios.get ~ err:", err);
      });
  }, [id]);
  return (
    <div className="w-[85%] mx-auto my-16">
      <div
        onClick={() => navigate("/")}
        className="cursor-pointer font-semibold text-gray-700 underline text-sm my-4"
      >
        Back
      </div>
      <div>
        {loading && <Spinner />}
        {blog.image ? (
          <img src={blog.image} className="rounded-md" />
        ) : (
          <img src="images/image2.png" />
        )}
        <span className="px-4 py-2 bg-green-400 text-gray-900 rounded-md inline-block my-4">
          {blog.category}
        </span>
        <h1 className="text-2xl font-bold my-1 ">{blog.title}</h1>
        <span className="font-semibold text-sm my-1 text-green-400 underline">
          Author: {blog.author}
        </span>
        <p className="text-gray-500 text-base my-4">{blog.description}</p>

        <div className="w-[150px] flex justify-between items-center">
          <Link to={`/blogs/edit/${blog._id}`}>
            <button className="px-4 py-2 rounded-md text-white bg-blue-500">
              Edit
            </button>
          </Link>
          <Link to={`/blogs/delete/${blog._id}`}>
            <button className="px-4 py-2 rounded-md text-white bg-red-400">
              Delete
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailBlog;
