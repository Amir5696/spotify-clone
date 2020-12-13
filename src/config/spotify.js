export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000";

const clientId = "85a263c3b0c047d982d8ebe35d362ac5";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initialValue, item) => {
      let parts = item.split("=");
      initialValue[parts[0]] = decodeURIComponent(parts[1]);
      return initialValue;
    }, {});
    
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
