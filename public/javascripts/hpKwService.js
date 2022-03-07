//todo fetch BMI from server, e.g. with js fetch and then callback with bmi
var serverURL = new URL("http://localhost:3000/API/hpkw");

async function fetchKw(hp) {
  serverURL.search = new URLSearchParams({hp: hp}).toString();
  const response = await fetch(serverURL);
  return response.json();
}
