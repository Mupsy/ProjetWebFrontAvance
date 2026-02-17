export const getApiUrl = () => {
  if (process.env.REACT_APP_API_URL) {
    if (process.env.REACT_APP_API_URL === "/") {
      return "";
    }
    return process.env.REACT_APP_API_URL;
  }
  const { protocol, hostname } = window.location;
  return `${protocol}//${hostname}:5000`;
};

export const API_URL = getApiUrl();
