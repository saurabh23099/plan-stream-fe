import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

export const getAllVideos = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/videos`);
    return res.data;
  } catch (error) {
    throw new Error('Failed to fetch videos');
  }
};

export const searchVideos = async (query: string) => {
  try {
    const res = await axios.get(`${BASE_URL}/videos/search`, {
      params: { q: query },
    });
    return res.data;
  } catch (error) {
    throw new Error('Failed to search videos');
  }
};

