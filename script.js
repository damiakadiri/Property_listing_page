const main = document.getElementById("main");

function fetchData() {
  fetch("https://bayut.p.rapidapi.com/properties/detail?externalID=4937770", {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5e4f4e2f06msh2dcc16334e634eep12ff8bjsn74d01f6b0b0f",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response.title);
    })
    .catch((err) => {
      console.log(err);
    });
}

fetchData();
