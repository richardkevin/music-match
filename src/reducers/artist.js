const GET_ARTIST = "ADD_MUSIC";

const corsAnywhere = "https://cors-anywhere.herokuapp.com";
const artistUrl = "https://api.deezer.com/artist";
const url = `${corsAnywhere}/${artistUrl}`;

const MAX_ARTISTS = 1711306;

// reference: MDN
const getRandom = () => {
  const min = Math.ceil(1);
  const max = Math.floor(MAX_ARTISTS);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomArtist = async () => {
  const response = await fetch(`${url}/${getRandom()}`);
  const artist = await response.json();
  if (artist.code === 800) {
    await getRandomArtist();
  }
  return artist;
};

export const getArtist = () => ({
  type: GET_ARTIST
});

const artist = async (state = {}, action) => {
  switch (action.type) {
    case GET_ARTIST:
      const artist = getRandomArtist();
      console.log("reducer", artist);
      return { artist };
    default:
      return state;
  }
};

export default artist;
