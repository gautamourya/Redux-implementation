import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { asyncregisteruser } from "../../store/actions/userAction"; 
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [preview, setPreview] = useState("");

  const imageUrl = watch("image");

  const createproducthandler = (product) => {
    product.id = nanoid()
    console.log("Creating Product:", product);
    // dispatch(asyncregisteruser(product));
    navigate("/products");
    reset();
    setPreview("");
  };

  // Update preview when image changes
  if (imageUrl && imageUrl !== preview) {
    setPreview(imageUrl);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 flex items-center justify-center p-6">
      <div className="mt-20 bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl w-full max-w-5xl border border-indigo-100 p-8 flex flex-col md:flex-row gap-8 transition-all duration-500 hover:shadow-indigo-200">
        
        {/* LEFT: Image Preview */}
        <div className="flex-1 flex items-center justify-center bg-gradient-to-tr from-indigo-100 to-white rounded-2xl border border-indigo-100 shadow-inner p-4">
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="rounded-xl shadow-lg max-h-80 object-contain"
            />
          ) : (
            <div className="text-gray-400 text-center font-medium">
              🖼️ Image Preview <br />
              (Paste Image URL)
            </div>
          )}
        </div>

        {/* RIGHT: Form Section */}
        <form
          onSubmit={handleSubmit(createproducthandler)}
          className="flex-1 space-y-5"
        >
          <h2 className="text-3xl font-extrabold text-indigo-700 mb-2 text-center md:text-left">
            Add New Product
          </h2>
          <p className="text-gray-500 text-sm md:text-base mb-4 text-center md:text-left">
            Fill in the product details below to add a new item.
          </p>

          {/* --- TITLE --- */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Product Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="e.g. Nike Air Force1"
              {...register("title", { required: "Title is required" })}
              className={`w-full p-3 border ${
                errors.title ? "border-red-500" : "border-gray-300"
              } rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                transition duration-200 shadow-sm hover:shadow-md`}
            />
            {errors.title && (
              <p className="mt-1 text-xs text-red-500">{errors.title.message}</p>
            )}
          </div>

          {/* --- IMAGE URL --- */}
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Image URL
            </label>
            <input
              id="image"
              type="url"
              placeholder="https://example.com/product.jpg"
              {...register("image", { required: "Image URL is required" })}
              className={`w-full p-3 border ${
                errors.image ? "border-red-500" : "border-gray-300"
              } rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                transition duration-200 shadow-sm hover:shadow-md`}
            />
            {errors.image && (
              <p className="mt-1 text-xs text-red-500">{errors.image.message}</p>
            )}
          </div>

          {/* --- PRICE --- */}
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Price (₹)
            </label>
            <input
              id="price"
              type="number"
              placeholder="Enter price"
              {...register("price", {
                required: "Price is required",
                min: { value: 1, message: "Price must be greater than 0" },
              })}
              className={`w-full p-3 border ${
                errors.price ? "border-red-500" : "border-gray-300"
              } rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                transition duration-200 shadow-sm hover:shadow-md`}
            />
            {errors.price && (
              <p className="mt-1 text-xs text-red-500">{errors.price.message}</p>
            )}
          </div>

          {/* --- CATEGORY --- */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Category
            </label>
            <input
              id="category"
              type="text"
              placeholder="e.g. Shoes, Electronics, Clothing..."
              {...register("category", { required: "Category is required" })}
              className={`w-full p-3 border ${
                errors.category ? "border-red-500" : "border-gray-300"
              } rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                transition duration-200 shadow-sm hover:shadow-md`}
            />
            {errors.category && (
              <p className="mt-1 text-xs text-red-500">
                {errors.category.message}
              </p>
            )}
          </div>

          {/* --- DESCRIPTION --- */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              placeholder="Write a short product description..."
              {...register("description", {
                required: "Description is required",
              })}
              className={`w-full p-3 border ${
                errors.description ? "border-red-500" : "border-gray-300"
              } rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                transition duration-200 shadow-sm hover:shadow-md`}
            ></textarea>
            {errors.description && (
              <p className="mt-1 text-xs text-red-500">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* --- SUBMIT BUTTON --- */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-bold 
                       py-3 rounded-xl shadow-md hover:from-indigo-700 hover:to-indigo-800 
                       focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 
                       transform hover:scale-[1.02]"
          >
            CREATE PRODUCT
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
