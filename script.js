fetch(
  "https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4",
  {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "cbf2168d07msh6f9a02c23429942p1a2153jsndff097ebfc34",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  }
)
  .then((response) => response.json())
  .then((data) => {
    const list = data.hits;

    list.map((item) => {
      const title = item.title;
      const price = item.price;
      const location = item.location[0].name;
      const image = item.coverPhoto.url;
      const property = `<li><img src="${image}" <h2>${title}</h2><h3>${price}DH</h3><p>${location}</p></li>`;
      document.querySelector(".properties").innerHTML += property;
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
