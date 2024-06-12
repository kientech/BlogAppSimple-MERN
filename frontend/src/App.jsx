import React from "react";
import Spinner from "./components/Spinner";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBlog from "./pages/CreateBlog";
import DetailBlog from "./pages/DetailBlog";
import DeleteBlog from "./pages/DeleteBlog";
import EditBlog from "./pages/EditBlog";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/blogs/add-blog" element={<CreateBlog></CreateBlog>} />
      <Route path="/blogs/detail/:id" element={<DetailBlog></DetailBlog>} />
      <Route path="/blogs/delete/:id" element={<DeleteBlog></DeleteBlog>} />
      <Route path="/blogs/edit/:id" element={<EditBlog></EditBlog>} />
    </Routes>
  );
};

export default App;
