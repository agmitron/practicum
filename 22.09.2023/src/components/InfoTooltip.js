import React from "react";
import PropTypes from 'prop-types';
import Popup from "./Popup.js";
import SuccessIcon from "../images/success-icon.svg";
import ErrorIcon from "../images/error-icon.svg";

const ICONS = {
  success: SuccessIcon,
  error: ErrorIcon,
};

function InfoTooltip({ isOpen, onClose, status: { iconType, text } = {} }) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <img className='popup__icon' src={ICONS[iconType]} alt={text} />
      <p className='popup__status-message'>{text}</p>
    </Popup>
  );
}

InfoTooltip.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  status: PropTypes.shape({
    iconType: PropTypes.oneOf(['success', 'error']).isRequired,
    text: PropTypes.string.isRequired
  })
}

export default InfoTooltip;
