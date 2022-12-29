import React from "react";

const ProductRow = ({ product, setDeleteProduct }) => {
  const { name, image, category, price } = product;

  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 text-gray-200 max-w-6xl">
        <div className="overflow-x-auto">
          <table className="min-w-full w-96">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <thead className="bg-purple-300 text-black">
              <tr className="text-center">
                <th className="p-3 font-semibold text-xl">Product Image</th>
                <th className="p-3 font-semibold text-xl">Product Name</th>
                <th className="p-3 font-semibold text-xl">Category</th>
                <th className="p-3 font-semibold text-xl">Price</th>
                <th className="p-3 font-semibold text-xl">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-opacity-20 border-black bg-gray-200  shadow-lg text-black">
                <td className="p-3 text-[16px] text-center flex items-center justify-center">
                  <img src={image} className="w-20 h-20" alt="" />
                </td>
                <td className="p-3 text-[16px] text-center">
                  <p>{name}</p>
                </td>
                <td className="p-3 text-[16px] text-center">
                  <p>{category}</p>
                </td>
                <td className="p-3 text-[16px] text-center">
                  <p>{price}</p>
                </td>

                <td className="text-[16px] text-center">
                  <label
                    onClick={() => setDeleteProduct(product)}
                    htmlFor="confirmation-modal"
                    type="button"
                    className="px-8 py-2.5 leading-5 bg-gradient-to-r from-purple-700 to-rose-500 text-white hover:bg-gradient-to-r hover:from-emerald-700 hover:via-blue-700 hover:to-emerald-700 transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductRow;
