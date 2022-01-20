/* eslint-disable camelcase */
import api from './api';

export async function convertFile(url: string, socket_id: string) {
  const apiUrl = `${process.env.REACT_APP_API_URL}/convert`;
  return api.post(apiUrl, { url, type: 'meta', socket_id });
}

export async function fetchFile(uuid: string) {
  const url = `${process.env.REACT_APP_API_URL}/fetch/${uuid}`;
  return api.get(url);
}

export async function getAllFiles() {
  const url = `${process.env.REACT_APP_API}/total`;
  return api.get(url);
}
