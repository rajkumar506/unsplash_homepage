export const fetchImages = async (searchValue) => {
  let baseUrl = `https://api.unsplash.com`;
  let Url;
  if (searchValue) {
    Url =
      baseUrl +
      `/search/photos?page=2&query=${searchValue}&client_id=0tphuKko-NDlZLEaaTz_W-ApILNckDV57k5T0bRWt4o&count=30`;
  } else {
    Url =
      baseUrl +
      `/photos/random?client_id=0tphuKko-NDlZLEaaTz_W-ApILNckDV57k5T0bRWt4o&count=30`;
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
