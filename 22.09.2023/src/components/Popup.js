import React from "react";
import PropTypes from 'prop-types';

function Popup({ isOpen, onClose, children, popupClass="", contentClass="" }) {
  React.useEffect(() => {
    if (!isOpen) return;
    const handleEscapeClose = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscapeClose);
    return () => {
      document.removeEventListener("keydown", handleEscapeClose);
    };
  }, [isOpen, onClose]);

  const handleOverlayClose = (event) => {
    if (event.target === event.currentTarget && isOpen) {
      onClose();
    }
  };

  return (
    <div
      className={`popup ${isOpen && "popup_is-opened"} ${popupClass}`}
      onMouseDown={handleOverlayClose}
    >
      <div className={`popup__content ${contentClass}`}>
        <button
          type='button'
          className='popup__close'
          onClick={onClose}
        ></button>
        {children}
      </div>
    </div>
  );
}

Popup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  popupClass: PropTypes.string,
  contentClass: PropTypes.string,
}

export default Popup;