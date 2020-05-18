import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Preview = ({ match: { params } }) => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <img
        src={`https://i.picsum.photos/id/${params.id}/1080/720.jpg`}
        alt=""
      />
    </div>
  );
};

Preview.propTypes = { match: PropTypes.object.isRequired };

export default Preview;
