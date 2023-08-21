import axios from 'axios';

const BASE_URL = `https://tasty-treats-backend.p.goit.global/api/events`;

async function fetchMasterClass() {
  try {
    const response = await axios.get(BASE_URL);

    if (response.status === 404) {
      throw new Error(response.status);
    }
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export { fetchMasterClass };
