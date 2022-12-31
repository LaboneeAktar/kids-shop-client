import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Loader from "../../Components/Loader";
import { AuthContext } from "../../contexts/AuthProvider";
import ConfirmationModal from "../Shared/ConfirmationModal/ConfirmationModal";
import ProductRow from "./ProductRow";

const AddedProductList = () => {
  const { loading, logOut } = useContext(AuthContext);

  const [productList, setProductList] = useState([]);
  const [deleteProduct, setDeleteProduct] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const closeModal = () => {
    setDeleteProduct(null);
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/products`)
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut();
        }
        return res.json();
      })
      .then((data) => setProductList(data));
  }, [refresh, logOut]);

  //delete product data
  const handleDelete = (product) => {
    fetch(`${process.env.REACT_APP_API_URL}/products/${product._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Successfully Deleted`);
          setRefresh(!refresh);
        }
      });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="lg:pt-28 pt-20 pb-10">
      <div className="my-5 mx-5">
        <h1 className="text-2xl text-center">
          Total Products : {productList.length}
        </h1>

        {productList.map((product) => (
          <ProductRow
            key={product._id}
            product={product}
            setDeleteProduct={setDeleteProduct}
          ></ProductRow>
        ))}

        {deleteProduct && (
          <ConfirmationModal
            title={`Are you sure you want to delete "${deleteProduct.name}"?`}
            message={`If you delete, it cannot get back.`}
            modalData={deleteProduct}
            closeModal={closeModal}
            successAction={handleDelete}
          ></ConfirmationModal>
        )}
      </div>
    </div>
  );
};

export default AddedProductList;
