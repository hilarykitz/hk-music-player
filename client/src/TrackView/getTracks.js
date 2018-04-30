export const getTracks = async artistId => {
  const response = await fetch(
    'https://freemusicarchive.org/api/get/tracks.json?artist_id=' +
      artistId +
      'api_key=XXXXXXXX'
  );
  const body = await response.json();

  if (response.status !== 200) throw Error(body.message);
  return body;
};
