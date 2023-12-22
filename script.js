const properties = document.querySelector(".properties");
const property = document.getElementById("prop");

const url =
  "https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4";

async function getProperty() {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a2d143a19fmsha27797a43c69b44p15349fjsn4770dbbe4007",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json(); // Extracting data as a JSON Object from the response
  console.log(data);
  showProperties(data.hits.slice(0, 12));
}

getProperty();

function showProperties(property) {
  properties.innerHTML = "";
  property.forEach((item) => {
    const { title, price, location } = item;
    const image = item.coverPhoto.url;

    const markup = `
    <div class="property" id="prop">
       <img
       src="${image}"
        alt="house"
       />
       <h3>$${price}</h3>
       <p>${title}</p>
    </div>
    `;
    properties.insertAdjacentHTML("afterbegin", markup);
  });
}
