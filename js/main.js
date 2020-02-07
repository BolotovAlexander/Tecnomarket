import {sliderArr} from './sliderArr.js';
import {cardGoods} from './cardGoods.js';
import {cardBrands} from './cardBrands.js';

window.onload = () => {

const sliderArrLength = sliderArr.length;
const mainIndex = document.getElementById('main-index');
const mainCatalog = document.getElementById('main-catalog');
const technomartLinkUp = document.getElementById('technomart-link-up');
const technomartLinkDown = document.getElementById('technomart-link-down');
const sliderOpenCatalogButton = document.getElementById('slider-open-catalog');
const sliderMain = document.getElementById('slider-main');
const sliderMainTextDiv = document.querySelector('.slider-text-div');
const sliderMainTextDivSpan = sliderMainTextDiv.querySelector('span');
const sliderMainTextDivText = sliderMainTextDiv.querySelector('p');
const sliderButtonLeft = document.querySelector('.slider-button-left');
const sliderButtonRight = document.querySelector('.slider-button-right');
const buttonPopUpMapOpen = document.querySelector('.button-pop-up-map');
const popUpMap = document.getElementById('pop-up-map');
const buttonPopUpBigMapClose = document.getElementById('button-pop-up-big-map-close');
const formWriteUs = document.getElementById('form-write-us');
const buttonWriteUs = document.querySelector('.button-write-us');
const buttonPopUpWriteUsFormClose = document.getElementById('button-pop-up-write-us-form-close');
const buttonLogin = document.querySelector('.button-login');
const idHeaderMiddleElementRightForm = document.getElementById('id-header-middle-element-right-form');
const idHeaderMiddleElementRight = document.getElementById('id-header-middle-element-right');


let sliderMainImageUrl = 'url(./img/slider/' + sliderArr[0].img + ')';
sliderMain.style.backgroundImage = sliderMainImageUrl;
sliderMainTextDivSpan.innerText = sliderArr[0].heading;
sliderMainTextDivText.innerText = sliderArr[0].text;

let sliderIndex = 0;


mainCatalog.hidden = true;
mainIndex.hidden = false;
popUpMap.classList.add('visually-hidden');
formWriteUs.classList.add('visually-hidden');
idHeaderMiddleElementRightForm.style.display = "none";

// Main index/catalog change //

sliderOpenCatalogButton.addEventListener("click", renderCatalogSite);

function renderIndexSite() {
  technomartLinkUp.removeEventListener("click", renderIndexSite);
  technomartLinkDown.removeEventListener("click", renderIndexSite);
  mainCatalog.hidden = true;
  mainIndex.hidden = false;
  sliderOpenCatalogButton.addEventListener("click", renderCatalogSite);
  document.getElementById('card-Goods-Ul-Catalog').innerHTML = "";
}

function renderCatalogSite() {
  sliderButtonLeft.removeEventListener("click", indexSubtraction);
  sliderButtonRight.removeEventListener("click", indexAddition);
  sliderOpenCatalogButton.removeEventListener("click", renderCatalogSite);
  mainIndex.hidden = true;
  mainCatalog.hidden = false;
  technomartLinkUp.addEventListener("click", renderIndexSite);
  technomartLinkDown.addEventListener("click", renderIndexSite);
  cardGoodsRenderCatalog();
}

// main slider //

if (mainIndex.hidden === false) {
  let timerId = setInterval(() => renderSlider(sliderArr, sliderArrLength), 4000)
};

function renderSlider(sliderArr) {
  if (mainIndex.hidden) return;
  if (sliderIndex === sliderArrLength) {
    sliderIndex = 0;
  }
  sliderMain.style.backgroundImage = 'url(./img/slider/' + sliderArr[sliderIndex].img + ')';
  sliderMainTextDivSpan.innerText = sliderArr[sliderIndex].heading;
  sliderMainTextDivText.innerText = sliderArr[sliderIndex].text;
  ++sliderIndex;
};

sliderButtonLeft.addEventListener("click", indexSubtraction);
sliderButtonRight.addEventListener("click", indexAddition);

function indexSubtraction() {
  --sliderIndex;
  if (sliderIndex < 0) {
    sliderIndex = 0
  };
  sliderMainImageUrl = 'url(./img/slider/' + sliderArr[sliderIndex].img + ')';
  sliderMain.style.backgroundImage = sliderMainImageUrl;
  sliderMainTextDivSpan.innerText = sliderArr[sliderIndex].heading;
  sliderMainTextDivText.innerText = sliderArr[sliderIndex].text;
}

function indexAddition() {
  ++sliderIndex;
  if (sliderIndex >= sliderArrLength) {
    sliderIndex = sliderArrLength - 1
  };
  sliderMainImageUrl = 'url(./img/slider/' + sliderArr[sliderIndex].img + ')';
  sliderMain.style.backgroundImage = sliderMainImageUrl;
  sliderMainTextDivSpan.innerText = sliderArr[sliderIndex].heading;
  sliderMainTextDivText.innerText = sliderArr[sliderIndex].text;
}


// Pop Up Map //

buttonPopUpMapOpen.addEventListener("click", mapOpen);

function mapOpen() {
  buttonPopUpMapOpen.removeEventListener("click", mapOpen);
  popUpMap.classList.remove('visually-hidden');
  popUpMap.classList.add('fade-in-down');
  buttonPopUpBigMapClose.addEventListener("click", mapClose);
}

function mapClose() {
  buttonPopUpBigMapClose.removeEventListener("click", mapClose)
  popUpMap.classList.add('visually-hidden');
  popUpMap.classList.remove('fade-in-down');
  buttonPopUpMapOpen.addEventListener("click", mapOpen);
}


// Form "Write us" //

buttonWriteUs.addEventListener("click", formWriteUsOpen);

function formWriteUsOpen() {
  buttonWriteUs.removeEventListener("click", formWriteUsOpen);
  formWriteUs.classList.remove('visually-hidden');
  formWriteUs.classList.add('fade-in-down');
  buttonPopUpWriteUsFormClose.addEventListener("click", formWriteUsClose);
}

function formWriteUsClose() {
  buttonPopUpWriteUsFormClose.removeEventListener("click", formWriteUsClose)
  formWriteUs.classList.add('visually-hidden');
  formWriteUs.classList.remove('fade-in-down');
  buttonWriteUs.addEventListener("click", formWriteUsOpen);
}


// Login Form //

buttonLogin.addEventListener("click", openFormLogin);

function openFormLogin() {
  buttonLogin.removeEventListener("click", openFormLogin);
  idHeaderMiddleElementRight.classList.add('visually-hidden');
  idHeaderMiddleElementRightForm.style.display = "flex";
}

function closeFormLogin() {
  idHeaderMiddleElementRightForm.style.display = "none";
  idHeaderMiddleElementRight.classList.remove('visually-hidden');
  buttonLogin.addEventListener("click", openFormLogin);
}



// Rendering card of Goods //

cardGoodsRenderIndex();

function cardGoodsRenderIndex() {
  let wrapperCard = document.getElementById('card-Goods-Ul-Index');
  for (let i = 0; i < 4; ++i) {
    wrapperCard.innerHTML += cardRender(cardGoods[i])
  }
}

function cardGoodsRenderCatalog() {
  let wrapperCard = document.getElementById('card-Goods-Ul-Catalog');
  for (let i = 0; i < 9; ++i) {
    wrapperCard.innerHTML += cardRender(cardGoods[i])
  }
}

function cardRender(arr) {
  return (
    `<li class="card-item" data-id="${arr.id}"
      style="background-image:url('http://127.0.0.1:8080/img/goods/${arr.img}')">
      <div class="wrapper-card-item-buttons"><button class="button-card-item-buy">купить</button>
      <button class="button-card-item-addtobookmarks">в закладки</button></div>
      <h3 class="card-goods-name">${arr.name}</h3>
      <h3 class="card-goods-id-name">${arr.model}</h3>
      <div class="old-price">${arr.oldPrice}</div>
      <div class="new-price">${arr.price} грн.</div>
      <div class="new" style="display:${arr.newDisplay}"">new</div>
    </li>`
  )
}


// Rendering card of Brands //

cardBrandsRenderIndex();

function cardBrandsRenderIndex() {
  let wrapperCard = document.getElementById('card-Brands-Ul-Index');
  for (let i = 0; i < 8; ++i) {
    wrapperCard.innerHTML += cardBrandsRender(cardBrands[i]);
  }
}

function cardBrandsRender(arr) {
  return (
    `<li class="brand" style="background-image:url('http://127.0.0.1:8080/img/brands/${arr.img}')">
      <a href="#"><h3 class="visually-hidden">${arr.name}</h3></a>
     </li>`
  )
}



}