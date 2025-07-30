const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");
const membershipcard = document.querySelector("#membership-card");
const openButton1 = document.querySelector("#openButton1");
const dialogBox1 = document.querySelector("#dialogBox1");
const closeButton1 = document.querySelector("#closeButton1");
const openButton2 = document.querySelector("#openButton2");
const dialogBox2 = document.querySelector("#dialogBox2");
const closeButton2 = document.querySelector("#closeButton2");
const openButton3 = document.querySelector("#openButton3");
const dialogBox3 = document.querySelector("#dialogBox3");
const closeButton3 = document.querySelector("#closeButton3");



// "Show the dialog" button opens the dialog modally

// this is used for the index.html code
openButton.addEventListener("click", () => {
    dialogBox.showModal();
}
);

openButton1.addEventListener("click", () => {
    dialogBox1.showModal();
}
);

openButton2.addEventListener("click", () => {
    dialogBox2.showModal();
}
);

openButton3.addEventListener("click", () => {
    dialogBox3.showModal();
}
);


// "Close" button close the dialog
closeButton.addEventListener("click", () => {
    dialogBox.close();
}
);

closeButton1.addEventListener("click", () => {
    dialogBox1.close();
}
);

closeButton2.addEventListener("click", () => {
    dialogBox2.close();
}
);

closeButton3.addEventListener("click", () => {
    dialogBox3.close();
}
);


