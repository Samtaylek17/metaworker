import api from './api';

export async function convertFile({ url }: { url: string }) {
  const apiUrl = `${process.env.REACT_APP_API_URL}/convert`;
  return api.post(apiUrl, { url, type: 'meta' });
}

export async function fetchFile({ fileId }: { fileId: string }) {
  const url = `${process.env.REACT_APP_API}/fetch/${fileId}`;
  return api.get(url);
}

export async function getAllFiles() {
  const url = `${process.env.REACT_APP_API}/total`;
  return api.get(url);
}
