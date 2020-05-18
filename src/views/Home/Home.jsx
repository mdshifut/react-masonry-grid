import React, { useState, useEffect, useRef, useCallback } from "react";
import AutoResponsive from "autoresponsive-react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import useImageSearch from "./useImageSearch";
import Loader from "../../components/Loader/Loader";

const Home = () => {
  const [containerWidth, setContainerWidth] = useState(null);
  const container = useRef();

  const [pageNumber, setPageNumber] = useState(1);

  const { images, hasMore, loading } = useImageSearch(pageNumber);

  const observer = useRef();

  const lastImageElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const getAutoResponsiveProps = () => {
    return {
      itemMargin: 10,
      containerWidth: containerWidth || document.body.clientWidth,
      itemClassName: "item",
      gridWidth: 100,
      transitionDuration: ".5",
    };
  };

  const getWindowSize = () => {
    setContainerWidth(ReactDOM.findDOMNode(container.current).clientWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", getWindowSize, false);
    return () => {
      window.removeEventListener("resize", getWindowSize, false);
    };
  }, []);

  return (
    <div className="albumPanel">
      <AutoResponsive ref={container} {...getAutoResponsiveProps()}>
        {images.map((i, index) => {
          let style = {
            width: i.width > 4000 ? 190 : 390,
            height: i.width > 4000 ? 240 : 490,
          };

          if (images.length === index + 1) {
            return (
              <Link
                key={index}
                to={`/preview/${i.id}`}
                style={style}
                ref={lastImageElementRef}
              >
                <img
                  className="a-cover"
                  alt="img"
                  src={`https://i.picsum.photos/id/${i.id}/${style.width}/${style.height}.jpg`}
                />
              </Link>
            );
          }
          return (
            <Link key={index} to={`/preview/${i.id}`} style={style}>
              <img
                className="a-cover"
                alt="img"
                src={`https://i.picsum.photos/id/${i.id}/${style.width}/${style.height}.jpg`}
              />
            </Link>
          );
        })}
      </AutoResponsive>
      <Loader loading={loading} />
    </div>
  );
};

Home.propTypes = {};

export default Home;
