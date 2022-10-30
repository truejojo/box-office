const API_BASE_URL = "https://api.tvmaze.com";

export const apiGet = async (queryString: string) => {
  const response = await fetch(`${API_BASE_URL}${queryString}`);
  const jsonData = await response.json();
  return jsonData;
};
