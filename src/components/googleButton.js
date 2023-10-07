import React from "react";

const GoogleButton = ({ children, ...buttonProps }) => {
  return (
    <button {...buttonProps}>
      <div className="google-icon-wrapper">
        <img
          className="google-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          alt="google button"
        />
        <p className="btn-text">
          <b>{children}</b>
        </p>
      </div>
    </button>
  );
};

export default GoogleButton;
