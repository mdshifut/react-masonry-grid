import React from "react";
import PropTypes from "prop-types";

const Preview = ({ match: { params } }) => {
  return (
    <div style={{ width: "100%" }}>
      <img
        src={`https://picsum.photos/id/${params.id}/300/300`}
        alt=""
        style={{ width: "100%" }}
      />
    </div>
  );
};

Preview.propTypes = { match: PropTypes.object.isRequired };

export default Preview;
