import { useState } from "react";
import GOOGLE_SEARCH_API_KEY, { GOOGLE_CONTEXT_KEY } from "./config/api";
import axios from "axios";
import { useEffect } from "react";

const useGoogleSearch = (term) => {
  const [response, setResponse] = useState(null);
  // official live api url
  const apiURL = `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_SEARCH_API_KEY}&cx=${GOOGLE_CONTEXT_KEY}&q=${term}`;

  useEffect(() => {
    const sendApiRequest = async () => {
      axios
        .get(apiURL)
        .then((result) => {
          setResponse(result);
          console.log(result);
        })
        .catch((err) => console.log(err.message));
    };
    sendApiRequest();
  }, [term]);

  return response?.data;
};

export default useGoogleSearch;
