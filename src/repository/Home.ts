import api from '../configs/api';
import Home from '../models/Home';

export async function getHome(): Promise<Home | null> {
  let result = null;

  try {
    const latest = await api.get('/home');
    result = latest.data;
  } catch (error) {
    console.log(error);
  }

  return result;
}
