// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const myKey = "5720cdfeef81c92816a281a230530ede"
const myLat = "49.772886805417734"
const myLong = "6.6439497830571455"

const myUrl = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`

async function apiFetch() {
    try {
        const response = await fetch(myUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            // displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// apiFetch();
// function displayResults(data) {
//     currentTemp.innerHTML = `${data._____}&deg;F`;
//     const iconsrc = `https://openweathermap.org/img/w/${______}.___`;
//     let desc = data.weather[0].______;
//     weatherIcon.setAttribute('___', _____);
//     weatherIcon.setAttribute('___', _____);
//      captionDesc.textContent = `${desc}`;
// }