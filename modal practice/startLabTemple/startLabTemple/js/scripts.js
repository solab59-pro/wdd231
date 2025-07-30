import {temples} from '../data/temples.js'
// console.log(temples)

import {url} from '../data/temples.js'
// console.log(url)

// for this code the will be five query selector to be use
// grab a reference to the division where we display the items
const showHere = document.querySelector("#showHere")

// get a reference to the HTML dialog element
const mydialog = document.querySelector("#mydialog")
const mytitle = document.querySelector("#mydialog h2")
const myinfo = document.querySelector("#mydialog p")
const myclose = document.querySelector("#mydialog button")



// then we will need one addListener
myclose.addEventListener("click", () => mydialog.close());

// loop through aeeay of json items
function displayItems(data) {
    console.log(data)
    data.forEach(x => {
        console.log(x)
        const photo = document.createElement('img')
        photo.src = `${url}${x.path}`
        photo.alt = x.name
        
        // Add an even listener to each division on the page
        photo.addEventListener('click', () => showStuff(x));
        showHere.appendChild(photo)
    }
        
    )
}

// start displaying all items in the json file
displayItems(temples)

function showStuff(x) {
    mytitle.innerHTML = x.name
    mydialog.showModal()
}