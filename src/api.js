import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 0x51ixdgQGw23FzJmDzmbeM7ELvTsjFh0DYmHEFKlWI",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
