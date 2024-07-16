import "./modal-directory.styles.css";

const ModalDirectory = ({ active, modalTogle }) => {
  if (!active) return null;

  return (
    <div className="backdrop">
      <div className="modal">
        <h1 className="modal__title">Do you want to continue?</h1>
        <div className="modal__actions">
          <a href="" className="modal__action">
            Yes!
          </a>
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
