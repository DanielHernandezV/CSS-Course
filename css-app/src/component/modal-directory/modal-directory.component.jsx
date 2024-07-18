import { Link } from "react-router-dom";
import "./modal-directory.styles.css";
import { useEffect } from "react";

const ModalDirectory = ({ active, modalTogle, direction }) => {
  if (!active) return null;

  return (
    <div className="backdrop">
      <div className="modal">
        <h1 className="modal__title">Do you want to continue?</h1>
        <div className="modal__actions">
          <Link to={direction} onClick={modalTogle} className="modal__action">
            Yes!
          </Link>
          <button
            className="modal__action modal__action--negative"
            type="button"
            onClick={modalTogle}
          >
            No!
          </button>
        </div>
      </div>
    </div>
  );
};
export default ModalDirectory;
