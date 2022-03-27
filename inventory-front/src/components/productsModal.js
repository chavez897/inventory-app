import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "../hooks/useForm";
import { axiosInstance } from "../plugins/axios";

export const ProductModal = ({ setOpenModal, productId }) => {
  const [formValues, handleInputChange, setValues] = useForm({
    id: productId,
    name: "",
    description: "",
    quantity: "",
    price: "",
  });

  const { id, name, description, quantity, price } = formValues;
  const handleSubmit = () => {
    if (productId === 0) {
      axiosInstance.post(`/products/`, formValues).then(() => {
        setOpenModal(false);
      });
    } else {
      axiosInstance.put(`/products/${productId}/`, formValues).then(() => {
        setOpenModal(false);
      });
    }
  };

  useEffect(() => {
    if (productId !== 0) {
      axiosInstance.get(`/products/${productId}`).then((res) => {
        setValues(res.data)
      });
    }
  }, []);
  return (
    <div className="d-block modal">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Product</h5>
            <FontAwesomeIcon
              icon={faClose}
              className="btn"
              onClick={() => setOpenModal(false)}
            />
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-4">
                <div className="form-outline mb-4">
                  <label className="form-label">Name:</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-outline mb-4">
                  <label className="form-label">Quantity:</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="quantity"
                    value={quantity}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-outline mb-4">
                  <label className="form-label">Price:</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="price"
                    value={price}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-outline mb-4">
                  <label className="form-label">Description:</label>
                  <textarea
                    type="text"
                    className="form-control form-control-lg"
                    name="description"
                    value={description}
                    onChange={handleInputChange}
                    rows="3"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-success"
              onClick={handleSubmit}
            >
              Save
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
              onClick={() => setOpenModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
