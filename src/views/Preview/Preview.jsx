import React from "react";
import PropTypes from "prop-types";

const Preview = ({ match: { params } }) => {
  return (
    <div>
      <img
        src={`https://i.picsum.photos/id/${params.id}/1080/720.jpg`}
        alt=""
      />
    </div>
  );
};

Preview.propTypes = { match: PropTypes.object.isRequired };

export default Preview;
