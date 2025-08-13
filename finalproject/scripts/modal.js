const myInfo = new URLSearchParams(window.location.search);


console.log(myInfo.get('firstName'));
console.log(myInfo.get('lastName'));
console.log(myInfo.get('orgTitle'));
console.log(myInfo.get('email'));
console.log(myInfo.get('mobile'));
console.log(myInfo.get('businessName'));
console.log(myInfo.get('businessDesc'));

document.querySelector('#results').innerHTML = `
<p>Memebrship Application Request for ${myInfo.get('firstName')} ${myInfo.get('lastName')}</p>
<p>Email :  ${myInfo.get('email')} </p>
<p>Phone Number : ${myInfo.get('mobile')}</p>
<p>Organization Title : ${myInfo.get('orgTitle')} </p>
<p>Business Name : ${myInfo.get('businessName')} </p>
<p>Chosen membership level : ${myInfo.get('membershipLevel')} </p>
<p>Business Description : ${myInfo.get('businessDesc')} </p>
`


