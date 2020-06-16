import React, { useState, useEffect, useRef, useCallback } from "react";
import AutoResponsive from "../../components/AutoResponsive/AutoResponsive";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import useImageSearch from "./useImageSearch";
import Loader from "../../components/Loader/Loader";
import ImageGridControls from "./ImageGridControls";
import { getGridStyle } from "../../utils/getGridStyle";

const useStyle = makeStyles({
  albumWrapper: {
    overflowX: "hidden",
    maxWidth: "100%",
    margin: "10px",
    marginTop: 0,
  },
  imageWrapper: {
    borderRadius: "5px",
    overflow: "hidden",
    position: "relative",
    height: "100%",
    width: "100%",
  },
  image: {
    width: "100%",
    maxWidth: "100%",
    height: "100%",
  },
  caption: {
    position: "absolute",
    width: "100%",
    padding: "10px 10px",
    bottom: "0",
    left: "0",
    color: "#fff",
    backgroundColor: "#00000080",
  },
});

const Home = () => {
  const [containerWidth, setContainerWidth] = useState(null);
  const container = useRef();

  const [pageNumber, setPageNumber] = useState(1);
  const [gridSize, setGridSize] = useState(12);

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
      containerWidth: containerWidth,
      itemClassName: "item",
      gridWidth: containerWidth / gridSize,
      transitionDuration: ".5",
    };
  };

  const getWindowSize = () => {
    if (container.current) {
      setContainerWidth(
        ReactDOM.findDOMNode(container.current).clientWidth - 10
      );
    }
  };

  useEffect(() => {
    if (container.current) {
      setContainerWidth(
        ReactDOM.findDOMNode(container.current).clientWidth - 10
      );
    }
    window.addEventListener("resize", getWindowSize, false);
    return () => {
      window.removeEventListener("resize", getWindowSize, false);
    };
  }, []);

  const classes = useStyle();
  return (
    <div className={classes.albumWrapper} ref={container}>
      <ImageGridControls gridSize={gridSize} setGridSize={setGridSize} />
      <div style={{ marginTop: "85px" }}>
        {containerWidth && (
          <AutoResponsive {...getAutoResponsiveProps()}>
            {images.map((i, index) => {
              // prev code
              // let style =
              //   i.width < 4000
              //     ? getGridStyle({ gridSize, containerWidth })
              //     : getGridStyle({ gridSize, containerWidth, type: "double" });

              let style = getGridStyle({
                gridSize,
                containerWidth,
                type: "double",
              });

              if (images.length === index + 1) {
                return (
                  <Link
                    key={index}
                    to={`/preview/${i.id} `}
                    style={style}
                    ref={lastImageElementRef}
                  >
                    <div className={classes.imageWrapper}>
                      <img
                        className={classes.image}
                        alt="img"
                        src={`https://picsum.photos/id/${i.id}/300/300`}
                      />
                      <span className={classes.caption}>{i.author} last</span>
                    </div>
                  </Link>
                );
              }
              return (
                <Link key={index} to={`/preview/${i.id} `} style={style}>
                  <div className={classes.imageWrapper}>
                    <img
                      className={classes.image}
                      alt="img"
                      src={`https://picsum.photos/id/${i.id}/300/300`}
                    />
                    <span className={classes.caption}>{i.author}</span>
                  </div>
                </Link>
              );
            })}
          </AutoResponsive>
        )}
      </div>
      <Loader loading={loading} />
    </div>
  );
};

Home.propTypes = {};

export default Home;
