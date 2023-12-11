import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/aircrafts';

export const getAllAircrafts = async (filters = {}) => {
  try {
    const response = await axios.get(BASE_URL, { params: filters });
    return response.data;
  } catch (error) {
    console.error('Error fetching aircrafts:', error);
    throw error;
  }
};

export const getAircraftById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching aircraft with ID ${id}:`, error);
    throw error;
  }
};

export const sortAircrafts = async (sortBy, sortDirection) => {
  try {
    const response = await axios.get(BASE_URL, { params: { sortBy, sortDirection } });
    console.log({response})
    return response.data;
  } catch (error) {
    console.error('Error sorting aircrafts:', error);
    throw error;
  }
};

export const searchAircrafts = async (search) => {
  try {
    const response = await axios.get(BASE_URL, { params: { search } });
    return response.data;
  } catch (error) {
    console.error('Error searching aircrafts:', error);
    throw error;
  }
};
