const menu = [
  {
    id: 1,
    title: "Ada Çayı Sirkesi",
    category: [
      "Perakende-500ml",
      "Perakende-250ml",
      "Toptan-500ml",
      "Toptan-250ml",
    ],
    price: ["₺70.00", "₺52.50", "₺40.00", "₺30.00"],
    img: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    title: "Alıç Sirkesi",
    category: [
      "Perakende-500ml",
      "Perakende-250ml",
      "Toptan-500ml",
      "Toptan-250ml",
    ],
    price: ["₺60.00", "₺45.00", "₺35.00", "₺26.25"],
    img: "https://picsum.photos/200/300",
  },
];

const sayfaButton = document.querySelector("#anaSayfa");
const sirkeButton = document.querySelector("#sirke");
const iletisimButton = document.querySelector("#iletisim");
const bodybutton = document.querySelector(".section-center");

sayfaButton.addEventListener("click", run);
sirkeButton.addEventListener("click", run);
iletisimButton.addEventListener("click", run);

const sirke = [];

menu.forEach((item) => {
  sirke.push(item);
});

function createArray(array) {
  array.map((item) => {
    let div1 = document.createElement("div");
    let parentElement = document.querySelector(".section-center");
    div1.className = "menu-items col-lg-6 col-sm-12 mt-5";
    parentElement.appendChild(div1);

    let mInfo = document.createElement("div");
    mInfo.className = "menu-info border border-secondary rounded";
    div1.appendChild(mInfo);

    let mTitle = document.createElement("div");
    mTitle.className = "menu-title ms-2";
    mInfo.appendChild(mTitle);

    let div2 = document.createElement("div");
    div2.className = "row";
    mInfo.appendChild(div2);

    let mImg = document.createElement("img");
    mImg.className = "photo col-4 pb-2 ms-2 rounded";
    mImg.src = item.img;
    div2.appendChild(mImg);

    let titleInfo = document.createElement("h4");
    titleInfo.innerHTML = item.title;
    mTitle.appendChild(titleInfo);

    let div3 = document.createElement("div");
    div3.className = "buttons col-8 d-flex flex-column justify-content-center";
    div2.appendChild(div3);

    console.log(item.category.length);

    item.category.forEach((cat) => {
      let button = document.createElement("button");
      button.className = `btn btn-outline-primary`;
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

function run() {
  while (bodybutton.hasChildNodes()) {
    bodybutton.removeChild(bodybutton.firstChild);
  }
  if (this.id == "sirke") {
    createArray(sirke);
    sirkeButton.className = "btn btn-outline-dark";
  }
}
