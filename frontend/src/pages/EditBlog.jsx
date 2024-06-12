import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditBlog = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:4040/blogs/${id}`)
      .then((res) => {
        setTitle(res.data.data.title);
        setAuthor(res.data.data.author);
        setDescription(res.data.data.description);
        setCategory(res.data.data.category);
        setImage(res.data.data.image);
      })
      .catch((err) => {
        console.log("🚀 ~ axios.get ~ err:", err);
      });
  }, [id]);

  const handleEditBlog = (e) => {
    e.preventDefault();
    const updatedData = {
      title,
      author,
      description,
      image,
      category,
    };

    axios
      .patch(`http://127.0.0.1:4040/blogs/${id}`, updatedData)
      .then((res) => {
        alert(`Updated blog with id ${id}`);
        navigate("/");
      })
      .catch((err) => {
        console.log("🚀 ~ .then ~ err:", err);
      });
  };
  return (
    <div className="w-full flex justify-around my-32">
      <div className="w-[50%]">
        <img
          src="/images/image1.png"
          className="w-full rounded-md object-cover h-full"
          alt=""
        />
      </div>
      <div className="w-[40%]">
        <form>
          <h1 className="text-2xl text-green-600 font-bold my-4">
            Update blog with id :<span>{id}</span>
          </h1>
          <div className="my-2">
            <label
              htmlFor="title"
              className="text-md text-gray-600 font-semibold my-1 block"
            >
              Title
            </label>
            <input
              id="title"
              className="block border px-2 py-2 w-full rounded-md outline-none border-gray-400 focus:border-green-400 transition-all text-green-700"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter a title ..."
            />
          </div>

          <div className="my-2">
            <label
              htmlFor="author"
              className="text-md text-gray-600 font-semibold my-1 block"
            >
              Author
            </label>
            <input
              id="author"
              className="block border px-2 py-2 w-full rounded-md outline-none border-gray-400 focus:border-green-400 transition-all text-green-700"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter a author ..."
            />
          </div>

          <div className="my-2">
            <label
              htmlFor="description"
              className="text-md text-gray-600 font-semibold my-1 block"
            >
              Description
            </label>
            <input
              id="description"
              className="block border px-2 py-2 w-full rounded-md outline-none border-gray-400 focus:border-green-400 transition-all text-green-700"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter a description ..."
            />
          </div>

          <div className="my-2">
            <label
              htmlFor="category"
              className="text-md text-gray-600 font-semibold my-1 block"
            >
              Category
            </label>
            <input
              id="category"
              className="block border px-2 py-2 w-full rounded-md outline-none border-gray-400 focus:border-green-400 transition-all text-green-700"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter a category ..."
            />
          </div>

          <div className="my-2">
            <label
              htmlFor="image"
              className="text-md text-gray-600 font-semibold my-1 block"
            >
              Image
            </label>
            <input
              id="image"
              className="block border px-2 py-2 w-full rounded-md outline-none border-gray-400 focus:border-green-400 transition-all text-green-700"
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Enter a image ..."
            />
          </div>

          <button
            type="submit"
            className="w-[50%] block mx-auto my-4 p-4 bg-green-300 rounded-md text-md text-dark-400"
            onClick={handleEditBlog}
          >
            Update Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;