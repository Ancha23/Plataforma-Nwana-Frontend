import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

export const DonationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const [files, setFiles] = useState([]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("itemName", data.itemName);
    formData.append("description", data.description);
    formData.append("size", data.size);
    formData.append("condition", data.condition);
    formData.append("status", "Pending");
    formData.append("donorId", "66bcbe624007a6467bb4302a");

    files.forEach((file) => formData.append("images", file));

    try {
      await axios.post(
        "http://localhost:3033/api/clothing/clothing-items",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Clothing item added successfully!");
    } catch (error) {
      toast.error("Failed to add clothing item.");
      console.error(error);
    }
  };

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  return (
    <div className="max-w-md mx-auto mt-32 p-8 border border-gray-200 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add Clothing Item</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700">Item Name</label>
          <input
            type="text"
            {...register("itemName", { required: "Item name is required" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
          {errors.itemName && (
            <p className="text-red-500 text-sm">{errors.itemName.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Size</label>
          <input
            type="text"
            {...register("size", { required: "Size is required" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
          {errors.size && (
            <p className="text-red-500 text-sm">{errors.size.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Condition</label>
          <select
            {...register("condition", { required: "Condition is required" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="New">New</option>
            <option value="Used">Used</option>
          </select>
          {errors.condition && (
            <p className="text-red-500 text-sm">{errors.condition.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Images</label>
          <input
            type="file"
            onChange={handleFileChange}
            multiple
            accept="image/*"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600"
        >
          Add Clothing Item
        </button>
      </form>
    </div>
  );
};
