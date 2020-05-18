import { useEffect, useState } from "react";
import axios from "axios";

export default function useImageSearch(pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: "https://picsum.photos/v2/list",
      params: { page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setImages((prevImages) => {
          return [...new Set([...prevImages, ...res.data])];
        });
        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [pageNumber]);

  return { loading, error, images, hasMore };
}
