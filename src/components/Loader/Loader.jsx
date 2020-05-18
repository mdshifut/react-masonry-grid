import React from "react";
import PropTypes from "prop-types";
import "./Loader.css";

const Loader = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="loader">
      <img src="/loader.gif" alt="loader" />
    </div>
  );
};

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Loader;
