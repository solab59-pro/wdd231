const spotlightContainer = document.querySelector('.spotlight-container');

const members = [
  {
    companyName: "Alpha Marketing Solutions",
    logo: "images/alpha_marketing.jpeg",  // updated path
    phone: "(234) 08055818160",
    address: "1 Alpha Street, Ikorodu Lagos",
    website: "https://www.alphamarketsolutions.com/",
    membershipLevel: "Gold"
  },
  {
    companyName: "Beta World With Ai",
    logo: "images/beta_world_with_ai.jpg",  // updated path
    phone: "(234) 09058934035",
    address: "11, Kadiri Street, Coker, Orile, Lagos",
    website: "https://betaworldwithai.com",
    membershipLevel: "Silver"
  },
  {
    companyName: "Gamma Supermarket And Store ",
    logo: "images/gamma.jpg",  // updated path
    phone: "(234) 08036325089",
    address: "123 Olodi Apapa Road, Ikeja Lagos",
    website: "https://gammasupermarketandstore.com",
    membershipLevel: "Bronze"
  },
];

// Filter only Gold and Silver members
const goldSilverMembers = members.filter(m => m.membershipLevel === "Gold" || m.membershipLevel === "Silver" || m.membershipLevel === "Bronze");

// Randomly shuffle and pick 6 members max
function getRandomSpotlights(arr, num = 6) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(num, arr.length));
}

function displaySpotlights() {
  const spotlights = getRandomSpotlights(goldSilverMembers, 6);

  spotlightContainer.innerHTML = '';

  spotlights.forEach(member => {
    const card = document.createElement('article');
    card.className = 'spotlight-card';

    card.innerHTML = `
      <img src="${member.logo}" alt="${member.companyName} logo">
      <h3>${member.companyName}</h3>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Website:</strong> <a href="${member.website}" target="_blank" rel="noopener">${member.website}</a></p>
      <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
    `;

    spotlightContainer.appendChild(card);
  });
}

displaySpotlights();
