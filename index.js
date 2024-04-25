function cardMaker() {
    //  <div class="container">
    //         <div class="parent-card">
    //             <img class="card-img"></img>
//             <div class="name">
//                 <h1>name</h1>
//             </div>
//             <div class="name">
//                 <h2>profession</h2>
//             </div>
//             <button class="card-btn">review profile</button>
//         </div>
//     </div> 

let container = document.getElementById("container"); //#container
let userNameInput = document.getElementById("userName").value;
let userProfessionInput = document.getElementById("userProfession").value;
let userProfileInput = document.getElementById("userProfile").value;

if(userNameInput&&userProfessionInput&&userProfileInput){
// create elements

let parentCard = document.createElement("div"); //.parent-card
let cardImg = document.createElement("img"); //.card-img
let cardName = document.createElement("div"); //.name
let cardH1 = document.createElement("h1"); //h1 name
let cardProfession = document.createElement("div"); //.name profession
let cardH2 = document.createElement("h2"); // h2 name profession
let cardBtn = document.createElement("button"); //card-btn

// set css classes

parentCard.classList.add("parent-card");
cardImg.classList.add("card-img");
cardImg.setAttribute("src", userProfileInput);
cardName.classList.add("name");
cardH1.innerText = userNameInput;
cardProfession.classList.add("name");
cardH2.innerText = userProfessionInput;
cardBtn.classList.add("card-btn");
cardBtn.innerText = "review profile";

// make card through javascript

container.appendChild(parentCard);
parentCard.appendChild(cardImg);
parentCard.appendChild(cardName);
cardName.appendChild(cardH1);
parentCard.appendChild(cardProfession);
cardProfession.appendChild(cardH2);
parentCard.appendChild(cardBtn);


document.getElementById("userName").value = "";
document.getElementById("userProfession").value = "";
document.getElementById("userProfile").value = "";

}else{
    window.alert("PLEASE FILL ALL THE FIELDS")
}

// auto card generating process

// let cards = [
//     {
//         userName: userNameInput,
//         userProfession: userProfessionInput,
//     }

// ];
};

let scrollBtn = document.getElementById("scroll");
let hide = document.getElementById("hide");

function clk(){    
    hide.classList.toggle("card-maker");
    if(hide.classList.contains("card-maker")) {
        hide.classList.remove("d-none");
    }else{
        hide.classList.add("d-none");
    }
};


