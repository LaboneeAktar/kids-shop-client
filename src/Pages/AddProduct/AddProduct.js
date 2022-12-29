import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/categories`);
      const data = await res.json();
      return data;
    },
  });

  const navigate = useNavigate();

  const handleSubmitProduct = (event) => {
    event.preventDefault();

    const form = event.target;

    const productName = form.productname.value;
    const image = form.image.files[0];
    const category = form.category.value;

    const price = form.price.value;

    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API_KEY}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        // console.log("from image", imgData);
        if (imgData.success) {
          const product = {
            name: productName,
            image: imgData.data.url,
            category,
            price,
          };

          //save product data
          fetch(`${process.env.REACT_APP_API_URL}/product`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              // console.log(result);
              if (result.acknowledged) {
                toast.success(`Successfully Added Product`);
                form.reset();
                navigate("/allproducts");
              }
            })
            .catch((error) => console.log(error));
        }
      });
  };

  return (
    <div className="lg:pt-32 pt-20">
      <h1 className="text-2xl text-center">Add Product</h1>

      <section className="max-w-4xl p-6 mx-auto bg-gray-200 rounded-md shadow-md dark:bg-gray-800 lg:mt-8">
        <form onSubmit={handleSubmitProduct}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-black text-lg dark:text-gray-200"
                htmlFor="productname"
              >
                Product Name
              </label>
              <input
                id="productname"
                name="productname"
                type="text"
                placeholder="Enter Product Name"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                required
              />
            </div>

            <div>
              <label
                className="text-black text-lg dark:text-gray-200"
                htmlFor="image"
              >
                Product Image
              </label>
              <input
                id="image"
                type="file"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                required
              />
            </div>

            <div>
              <label className="block text-black text-lg">Category</label>
              <select
                name="category"
                className="w-full px-4 py-2 mt-2 rounded-md border bg-white border-gray-200 text-black  focus:border-violet-400 font-normal text-[16px]"
                required
              >
                {categories.map((category) => (
                  <option key={category._id} value={category.title}>
                    {category.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                className="text-black text-lg dark:text-gray-200"
                htmlFor="price"
              >
                Price
              </label>
              <input
                id="price"
                name="price"
                placeholder="Enter Price"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                required
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 bg-gradient-to-r from-purple-700 to-rose-500 text-white hover:bg-gradient-to-r hover:from-emerald-700 hover:via-blue-700 hover:to-emerald-700 transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Add
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddProduct;
