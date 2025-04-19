import { useState } from "react";
const ProductForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      quantity: '',
      category: '',
      about:'',
      photo: null,
    });
  
    const handleChange = (e) => {
      const { name, value, files } = e.target;
      setFormData({
        ...formData,
        [name]: files ? files[0] : value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = new FormData();
      data.append("name", formData.name);
      data.append("about", formData.about);
      data.append("quantity", formData.quantity);
      data.append("category", formData.category);      
      data.append("photo", formData.photo);
  
      try {
        const res = await fetch("/api/products", {
          method: "POST",
          body: data,
        });
        if (!res.ok) throw new Error("Failed to upload product");
        alert("Product added successfully!");
      } catch (err) {
        console.error(err);
        alert("Error adding product");
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="bg-gray-800  bg-opacity-50 backdrop-blur-md overflow-hidden rounded-2xl p-8 shadow-md text-gray-400 max-w-xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-gray-400 mb-6">Add New Product</h2>
        <div className="mb-4">
          <label className="block mb-1">Product Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-neutral-800 text-white border-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">About Product</label>
          <input
            type="text"
            name="about"
            value={formData.about}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-neutral-800 text-white border-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-neutral-800 text-white border-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-neutral-800 text-white border-none"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1">Photo</label>
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-neutral-800 text-white border-none"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-gray-900 text-gray-400 px-6 py-2 rounded font-semibold hover:bg-gray-600 yellow-500 transition"
        >
          Submit Product
        </button>
      </form>
    );
  };
export default ProductForm;  