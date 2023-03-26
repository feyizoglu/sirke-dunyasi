import { menu } from "./menu.js";

// const sayfaButton = document.querySelector("#anaSayfa"); //AnaSayfa Butonu
const sirkeButton = document.querySelector("#sirke"); //Sirkeler
// const iletisimButton = document.querySelector("#iletisim");
const bodybutton = document.querySelector(".section-center");

// sayfaButton.addEventListener("click", run);
sirkeButton.addEventListener("click", sirkeFunc);
// iletisimButton.addEventListener("click", run);

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

//Sirke function
function sirkeFunc() {
  while (bodybutton.hasChildNodes()) {
    bodybutton.removeChild(bodybutton.firstChild);
  }
  if (this.id == "sirke") {
    createArray(sirke);
    sirkeButton.className = "btn btn-outline-dark button";
  }
}
