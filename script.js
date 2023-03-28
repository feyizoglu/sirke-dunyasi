import { menu } from "./menu.js";

const sayfaButton = document.querySelector("#anaSayfa"); //AnaSayfa Butonu
const sayfaButton2 = document.querySelector("#anaSayfa2"); //AnaSayfa Butonu
const sirkeButton = document.querySelector("#sirke"); //Sirkeler
const sirkeButton2 = document.querySelector("#sirke2"); //Sirkeler
const iletisimButton = document.querySelector("#iletisim"); //İletişim
const iletisimButton2 = document.querySelector("#iletisim2"); //İletişim
const bodybutton = document.querySelector(".section-center");

sayfaButton.addEventListener("click", sirkeFunc);
sayfaButton2.addEventListener("click", sirkeFunc);
sirkeButton.addEventListener("click", sirkeFunc);
sirkeButton2.addEventListener("click", sirkeFunc);
iletisimButton.addEventListener("click", sirkeFunc);
iletisimButton2.addEventListener("click", sirkeFunc);

const sirke = [];
menu.forEach((item) => {
  sirke.push(item);
});

//Card Function
function createArray(array) {
  array.map((item) => {
    //Creating Card
    let div1 = document.createElement("div");
    let parentElement = document.querySelector(".section-center");
    div1.className = "col-lg-4 col-md-6 col-sm-12 mt-4 ms-0";
    parentElement.appendChild(div1);

    //Border
    let mInfo = document.createElement("div");
    mInfo.className = "border border-secondary ms-0";
    div1.appendChild(mInfo);

    //Tittle
    let mTitle = document.createElement("div");
    mTitle.className = "ps-2 border-bottom border-secondary pt-2";
    mInfo.appendChild(mTitle);

    let titleInfo = document.createElement("h4");
    titleInfo.innerHTML = item.title;
    mTitle.appendChild(titleInfo);

    //Image and Inside Buttons Part
    let div2 = document.createElement("div");
    div2.className = "row";
    mInfo.appendChild(div2);

    //Creating Image
    let mImg = document.createElement("img");
    mImg.className = "photo col-6 ms-1";
    mImg.src = item.img[0];
    div2.appendChild(mImg);
    //Changing img with hovering
    mImg.addEventListener("mouseenter", (e) => (mImg.src = item.img[1]));
    mImg.addEventListener("mouseleave", (e) => (mImg.src = item.img[0]));

    //Inside buttons Part
    let div3 = document.createElement("div");
    div3.className = "buttons col-6 d-flex flex-column justify-content-center";
    div2.appendChild(div3);

    //Buttons hover Effect Part
    item.category.forEach((cat) => {
      let button = document.createElement("button");
      button.className = `btn btn-outline-dark btn-text my-2 fs-4`;
      button.innerHTML = cat;
      div3.appendChild(button);
      button.addEventListener(
        "mouseenter",
        (e) => (button.innerHTML = item.price[item.category.indexOf(cat)])
      );
      button.addEventListener("mouseleave", (e) => (button.innerHTML = cat));
    });
  });
}

function createMain() {
  //Creating First Div
  let div1 = document.createElement("div");
  let parentElement = document.querySelector(".section-center");
  div1.className =
    "col-12 mt-4 d-flex flex-column align-items-center flex-md-row justify-content-md-between";
  parentElement.appendChild(div1);

  // Creating 2 Images
  let img1 = document.createElement("img");
  let img2 = document.createElement("img");
  img1.className = "main-photo";
  img2.className = "main-photo mt-5 mt-md-0";
  img1.src = "./imgs/mainpage/1.PNG";
  img2.src = "./imgs/mainpage/0.PNG";
  div1.appendChild(img1);
  div1.appendChild(img2);

  //Creating Second Div
  let div2 = document.createElement("div");
  div2.className = "col-12 mt-5 d-flex justify-content-center";
  parentElement.appendChild(div2);

  // Creating last Image
  let img3 = document.createElement("img");
  img3.className = "main-photo";
  img3.src = "./imgs/mainpage/2.PNG";
  div2.appendChild(img3);
}

function openLink() {
  window.open("https://www.instagram.com/sevilayin_sirke_dunyasi", "_blank");
}

//Sirke function
function sirkeFunc() {
  if (this.id == "iletisim" || this.id == "iletisim2") {
    openLink();
    iletisimButton.className = "btn btn-outline-dark button";
  } else {
    while (bodybutton.hasChildNodes()) {
      bodybutton.removeChild(bodybutton.firstChild);
    }
    if (this.id == "sirke" || this.id == "sirke2") {
      createArray(sirke);
      sirkeButton.className = "btn btn-outline-dark button";
    } else if (this.id == "anaSayfa" || this.id == "anaSayfa2") {
      createMain(anaSayfa);
      sayfaButton.className = "btn btn-outline-dark button";
    }
  }
}
