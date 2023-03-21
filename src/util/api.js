import axios from 'axios';

axios.defaults.baseURL = "http://64.226.82.147:5000";

export const sendBase64CodeOfPDF = async (data) => {
  try {
    const response = await axios.post('/initialize', { pdf: data });
    console.log(response.data);

  } catch (error) {
    throw error;
  }
}