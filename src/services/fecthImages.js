export const fetchImages = async (searchValue, page) => {
  let API_KEY = process.env.REACT_APP_API_ACCESS_KEY;
  let baseUrl = `https://api.unsplash.com`;
  let Url;
  if (searchValue) {
    Url =
      baseUrl +
      `/search/photos?page=${page}&query=${searchValue}&client_id=${API_KEY}&count=30`;
  } else {
    Url = baseUrl + `/photos/random?page=${page}&client_id=${API_KEY}&count=30`;
  }

  let myHeaders = new Headers();
  let response;
  let requestOptions = {
    method: "GET",
    headers: myHeaders,
  };
  try {
    response = await fetch(Url, requestOptions);
    response = await response.json();
    return response;
  } catch (error) {
    console.log("my error", error);
  }
};
