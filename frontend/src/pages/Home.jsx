import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://127.0.0.1:4040/blogs")
      .then((res) => {
        setBlogs(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("🚀 ~ axios.get ~ err:", err);
        setLoading(false);
      });
  }, []);
  return (
    <div className="m-8">
      <div className="flex mx-8 my-2 items-center justify-between">
        <h1 className="text-2xl font-bold text-green-500 underline">
          All Blogs
        </h1>
        <div
          className="w-12 h-12 flex items-center justify-center rounded-full bg-green-300 text-gray-950 font-bold cursor-pointer"
          onClick={() => navigate("/blogs/add-blog")}
        >
          +
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mx-8">
        {loading ? (
          <Spinner />
        ) : (
          <>
            {blogs &&
              blogs.map((blog, index) => (
                <Link to={`/blogs/detail/${blog._id}`}>
                  <div key={blog._id} className="my-4 shadow-md rounded-md">
                    {blog.image ? (
                      <img
                        src={blog.image}
                        className="rounded-md object-cover"
                      />
                    ) : (
                      <img
                        src="/images/image2.png"
                        className="rounded-md object-cover"
                      />
                    )}
                    <div className="p-2">
                      <span className="py-2 px-4 bg-green-200 rounded-md inline-block my-2">
                        {blog.category}
                      </span>
                      <span className="font-semibold text-gray-600 text-sm block">{blog.author}</span>
                      <h1 className="text-xl font-bold text-gray-900 my-1">
                        {blog.title}
                      </h1>
                      <p className="text-sm text-gray-500 description">
                        {blog.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
