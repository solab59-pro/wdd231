const spotlightContainer = document.querySelector('.spotlight-container');

const members = [
  {
    GalleryName: "Air Hostess Training",
    logo: "images/air_hostess.jpeg",  // updated path
    description: "Intense training on air hostess training to perfection",
    address: "1 Alpha Street, Ikorodu Lagos",
    website: "https://www.alphamarketsolutions.com/",
    membershipLevel: "Gold"
  },
  {
    GalleryName: "Class Lecture",
    logo: "images/class_training.jpg",  // updated path
    description: "With qualified and certified teachers always availble to lecture student on avaition courses",
    address: "11, Kadiri Street, Coker, Orile, Lagos",
    website: "https://betaworldwithai.com",
    membershipLevel: "Silver"
  },
  {
    GalleryName: "Pilot Training",
    logo: "images/pilot.jpeg",  // updated path
    description: "Guaranteed pilot training at the end of course completion for those interested to become a pilot",
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
      <img src="${member.logo}" alt="${member.GalleryName} logo">
      <h3>${member.GalleryName}</h3>
      <p><strong>Description:</strong> ${member.description}</p>
    `;

    spotlightContainer.appendChild(card);
  });
}

displaySpotlights();
