const API_URL = 'http://ws.audioscrobbler.com/2.0/';
const API_KEY = '12f3ecc25e61cfd5b7372ead28bc96ba';

export const getArtistSearchUrl = name => fetch(`${API_URL}?method=artist.search&artist=${name}&api_key=${API_KEY}&format=json`);

export const getArtistInfoUrl = name => fetch(`${API_URL}?method=artist.getinfo&artist=${name}&api_key=${API_KEY}&format=json`);
