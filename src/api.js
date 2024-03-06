import axios from 'axios';

export const getImage = async (query, page) => {
  const key = 'Az-V4onkbW9kOCxP_j6ZlhWzDf2OxExrL2GQ7x8vNsU';
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      client_id: key,
      query: query.split('/')[1],
      page,
      per_page: 20,
    },
  });
  return response.data;
};