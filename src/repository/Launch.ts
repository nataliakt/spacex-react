import api from '../configs/api';
import Launch from '../models/Launch';

export async function getLatestLaunch(): Promise<Launch | null> {
  let result = null;

  try {
    const latest = await api.get('/launches/latest');
    result = latest.data;
  } catch (error) {
    console.log(error);
  }

  return result;
}

export async function getNextLaunch(): Promise<Launch | null> {
  let result = null;

  try {
    const next = await api.get('/launches/next');
    result = next.data;
  } catch (error) {
    console.log(error);
  }

  return result;
}

export async function getUpcomingLaunches(): Promise<Launch[] | null> {
  let result = null;

  try {
    const upcoming = await api.get('/launches/upcoming');
    result = upcoming.data;
  } catch (error) {
    console.log(error);
  }

  return result;
}

export async function getPastLaunches(): Promise<Launch[] | null> {
  let result = null;

  try {
    const past = await api.get('/launches/past');
    result = past.data;
  } catch (error) {
    console.log(error);
  }

  return result;
}