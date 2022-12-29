import React from "react";

const ConfirmationModal = ({
  title,
  message,
  closeModal,
  modalData,
  successAction,
}) => {
  return (
    <div>
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <button
              onClick={closeModal}
              className="btn btn-outline font-normal px-8 py-2.5 "
            >
              Cancel
            </button>
            <label
              onClick={() => successAction(modalData)}
              htmlFor="confirmation-modal"
              className="px-8 py-2.5 bg-gradient-to-r from-purple-700 to-rose-500 text-white hover:bg-gradient-to-r hover:from-emerald-700 hover:via-blue-700 hover:to-emerald-700  rounded-md font-normal uppercase"
            >
              Delete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
