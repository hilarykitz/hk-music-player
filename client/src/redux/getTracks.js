export const getTracks = async artistId => {
  const artistFilter = artistId ? `artist_id=${artistId}` : '';
  const response = await fetch(
    `https://freemusicarchive.org/api/get/tracks.json?${artistFilter}
      api_key=XXXXXXXX`
  );
  const body = await response.json();

  if (response.status !== 200) throw Error(body.message);
  return body;
};
