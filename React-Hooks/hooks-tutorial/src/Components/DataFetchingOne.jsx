import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function DataFetchingOne() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setLoading(false);
        setError("");
        setPost(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went wrong!");
        setPost({});
      });
  }, []);

  return (
    <div>
      {loading ? "Loading" : post.title}
      {error ? "error" : null}
    </div>
  );
}

export default DataFetchingOne;
