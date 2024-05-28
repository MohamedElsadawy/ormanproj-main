import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { baseurl } from "./BaseUrl";

const UseFetch = (Url) => {
  const [data, setData] = useState(null);
  console.log(baseurl + Url);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(baseurl + Url);
        console.log("Response data:", response.data);
        setData(response.data);
      } catch (err) {
        setData(null);
      }
    })();
  }, [Url]);

  return data;
};
export default UseFetch;
