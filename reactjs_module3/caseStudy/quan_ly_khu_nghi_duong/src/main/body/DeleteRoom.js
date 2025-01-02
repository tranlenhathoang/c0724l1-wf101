import React from "react";

const DeleteRoom = () => {
  return (
    <>
      <div className={`modal show d-block`} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                // onClick={}
              ></button>
            </div>
            <div className="modal-body">
              <p>Bạn có chắc muốn xoá Student:</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                // onClick={onClose}
              >
                Close
              </button>
              <button
                // onClick={() => onDelete(studentDelete.id)}
                type="button"
                className="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DeleteRoom;
