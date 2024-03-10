import axios from "axios";

// axios.defaults.baseURL = "https://api.unsplash.com/";

export const getImage = async (query, page) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos/?&client_id=Az-V4onkbW9kOCxP_j6ZlhWzDf2OxExrL2GQ7x8vNsU`,
    {
      params: { query, page },
    }
  );

  return response.data;
};