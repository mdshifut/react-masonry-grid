/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from "react";
// import PropTypes from "prop-types";

const DropDown = ({ children, outSideClickHandler, ...rest }) => {
  const buttonRef = useRef();
  const handleClickOutside = (event) => {
    if (buttonRef && !buttonRef.current.contains(event.target)) {
      outSideClickHandler();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <li {...rest} ref={buttonRef}>
      {children}
    </li>
  );
};

DropDown.propTypes = {};

export default DropDown;
