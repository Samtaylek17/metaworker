/* eslint-disable camelcase */
import api from './api';

export async function convertFile(url: string) {
  const apiUrl = `${process.env.REACT_APP_API_URL}/convert`;
  return api.post(apiUrl, { url, type: 'meta' });
}

export async function fetchFile(uuid: string) {
  const url = `${process.env.REACT_APP_API_URL}/fetch/${uuid}`;
  return api.get(url);
}

export async function getAllFiles() {
  const url = `${process.env.REACT_APP_API}/total`;
  return api.get(url);
}
