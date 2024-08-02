import { Link } from "react-router-dom";
import "./modal-directory.styles.css";
import Button from "../button/button.component";
import { useEffect, useState } from "react";

const ModalDirectory = ({ active, modalTogle, direction }) => {
  const [isVisible, setIsVisible] = useState(active);
  const [isClosing, setIsClosing] = useState(false);
  useEffect(() => {
    let closeModal;
    if (active && !isVisible) setIsVisible(true);
    else if (!active && isVisible) {
      setIsClosing(true);
      closeModal = setTimeout(() => {
        setIsClosing(false);
        setIsVisible(false);
      }, 300);
    }
    return () => {
      if (closeModal) clearTimeout(closeModal);
    };
  }, [active]);

  if (!isVisible) return;

  return (
    <>
      <div className={`backdrop ${isClosing ? "backdrop-closing" : ""}`} />
      <div className={`modal ${isClosing ? "modal-closing" : ""}`}>
        <h1 className="modal__title">Do you want to continue?</h1>
        <div className="modal__actions">
          <Link to={direction} onClick={modalTogle} className="modal__action">
            Yes!
          </Link>
          <Button
            className="modal__action modal__action--negative"
            type="button"
            onClick={modalTogle}
          >
            No!
          </Button>
        </div>
      </div>
    </>
  );
};
export default ModalDirectory;
