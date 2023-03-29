export const exerciseOptions = {
  method: "GET",
  headers: {},
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
