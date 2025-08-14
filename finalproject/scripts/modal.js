const myInfo = new URLSearchParams(window.location.search);


console.log(myInfo.get('firstName'));
console.log(myInfo.get('lastName'));
console.log(myInfo.get('accomodation'));
console.log(myInfo.get('email'));
console.log(myInfo.get('mobile'));
console.log(myInfo.get('courseSelection'));
console.log(myInfo.get('description'));

document.querySelector('#results').innerHTML = `
<p>Memebrship Application Request for ${myInfo.get('firstName')} ${myInfo.get('lastName')}</p>
<p>Email :  ${myInfo.get('email')} </p>
<p>Phone Number : ${myInfo.get('mobile')}</p>
<p>Accomodation : ${myInfo.get('accomodation')} </p>
<p>Course Selected : ${myInfo.get('courseSelection')} </p>
<p>Business Description : ${myInfo.get('description')} </p>
`


