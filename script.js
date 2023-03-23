const menu = [
  {
    id: 1,
    title: "Ada Çayı",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/3E4C2DED-D0F9-45CD-B476-8BA54E533AD9/Derivates/d17260c9-bc36-4fb0-bbf1-3b4b8427be74.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

let categories = ["All", "Korea", "Japan", "China"]; //defining categories
categories.forEach((category, index) => {
  //adding information to each categories
  let button = document.createElement("button");
  let parentButton = document.querySelector(".btn-container");
  button.className = `btn btn-outline-dark all btn-item ${category.toLocaleLowerCase()}`;
  button.id = `${index + 1}`;
  button.innerHTML = category;
  parentButton.appendChild(button);
}); //describing button preferences

const japan = [];
const korea = [];
const china = [];

menu.forEach((item) => {
  if (item.category === "Korea") {
    korea.push(item);
  } else if (item.category === "Japan") {
    japan.push(item);
  } else if (item.category === "China") {
    china.push(item);
  }
});

const allButtons = document.querySelector(".all");
const japanbutton = document.querySelector(".japan");
const koreabutton = document.querySelector(".korea");
const chinabutton = document.querySelector(".china");
const bodybutton = document.querySelector(".section-center");

allButtons.addEventListener("click", run);
japanbutton.addEventListener("click", run);
koreabutton.addEventListener("click", run);
chinabutton.addEventListener("click", run);

function createArray(array) {
  array.map((item) => {
    let div1 = document.createElement("div");
    let parentElement = document.querySelector(".section-center");
    div1.className = "menu-items col-lg-6 col-sm-142";
    parentElement.appendChild(div1);

    let mInfo = document.createElement("div");
    mInfo.className = "menu-info";
    div1.appendChild(mInfo);

    let mTitle = document.createElement("div");
    mTitle.className = "menu-title";
    mInfo.appendChild(mTitle);

    let mText = document.createElement("div");
    mText.className = "menu-text";
    mInfo.appendChild(mText);

    let mImg = document.createElement("img");
    mImg.className = "photo";
    mImg.src = item.img;
    mInfo.appendChild(mImg);

    let titleInfo = document.createElement("h4");
    titleInfo.innerHTML = item.title;
    mTitle.appendChild(titleInfo);

    let priceInfo = document.createElement("h4");
    priceInfo.innerHTML = item.price;
    mTitle.appendChild(priceInfo);

    let text = document.createElement("p");
    text.innerHTML = item.desc;
    mText.appendChild(text);
  });
}

function run() {
  while (bodybutton.hasChildNodes()) {
    bodybutton.removeChild(bodybutton.firstChild);
  }

  if (this.id === "1") {
    createArray(menu);
  } else if (this.id === "2") {
    createArray(korea);
  } else if (this.id === "3") {
    createArray(japan);
  } else {
    createArray(china);
  }
}
