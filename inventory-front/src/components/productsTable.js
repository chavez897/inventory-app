import React, { useState, useEffect } from "react";
import { axiosInstance } from "../plugins/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faPlus,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "../hooks/useForm";

export const ProductsTable = ({ setOpenModal, openModal, setProductId }) => {
  const [products, setProducts] = useState([]);
  const [formValues, handleInputChange] = useForm({
    search: "",
  });

  const { search } = formValues;

  useEffect(() => {
    axiosInstance.get(`/products/`).then((res) => {
      setProducts(res.data);
    });
  }, []);
  useEffect(() => {
    if (!openModal) {
      searchProducts();
    }
  }, [openModal]);
  const searchProducts = () => {
    axiosInstance.get(`/products/?search=${search}`).then((res) => {
      setProducts(res.data);
    });
  };
  const newProduct = () => {
    setProductId(0);
    setOpenModal(true);
  };
  const updateProduct = (id) => {
    setProductId(id);
    setOpenModal(true);
  };
  const deleteProduct = (id) => {
    axiosInstance.delete(`/products/${id}/`).then((res) => {
      searchProducts();
    });
  };
  return (
    <>
      <div className="card w-100">
        <div className="card-body">
          <div className="row">
            <div className="col-7">
              <h5 className="card-title">Products</h5>
            </div>
            <div className="col-1">
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={newProduct}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            <div className="col-4">
              <div className="input-group">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  name="search"
                  value={search}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={searchProducts}
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
            </div>
          </div>
          <table className="table p-5">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.quantity}</td>
                  <td>${product.price}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-primary mx-3"
                      onClick={() => updateProduct(product.id)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => deleteProduct(product.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
