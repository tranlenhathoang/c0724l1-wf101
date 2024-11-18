import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

class DeleteStudent extends React.Component {
    constructor(props){
        super(props);
        this.state ={

        }
    }
  render() {
    if (!this.props.isShowModal) return null;
    return (
      <>
        <div className={`modal show d-block`} tabindex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={this.props.onClose}
                ></button>
              </div>
              <div className="modal-body">
                <p>Bạn có chắc muốn xoá Student: {this.props.student.name}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={this.props.onClose}
                >
                  Close
                </button>
                <button onClick={()=>this.props.deleteStudent(this.props.student)} type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default DeleteStudent;
