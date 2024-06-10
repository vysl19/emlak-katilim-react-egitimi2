import PropTypes from "prop-types";

function Modal(props) {
  const { danger, title, description, setIsShowModal } = props;
  function handleClose() {
    setIsShowModal(false);
  }

  return (
    <div className="modal d-block">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className={`modal-title ${danger && "text-danger"}`}>
              {title}
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleClose}
            ></button>
          </div>
          <div className="modal-body">
            <p>{description}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  setIsShowModal: PropTypes.func.isRequired,
  danger: PropTypes.bool,
};

export default Modal;
