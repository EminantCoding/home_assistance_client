export const baseUrl = "http://localhost:5000";
export const apiBaseUrl = `${baseUrl}/api`;

export const getUrl = (location) => {
  return location;
};

const apiLocations = {
  LOGIN: () => getUrl(`${apiBaseUrl}/auth`),
};

export default apiLocations;
