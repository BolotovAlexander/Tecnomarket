import {SLIDER_ARR} from './sliderArr.js';
import {CARD_GOODS} from './cardGoods.js';
import {CARD_BRANDS} from './cardBrands.js';

window.onload = () => {

const sliderArrLength = SLIDER_ARR.length;
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
const buttonsService = document.querySelector('.buttons-service');
const buttonsServiceAllButtons = buttonsService.querySelectorAll('button');
const wrapperServiceDelivery = document.querySelector('.wrapper-service-delivery');
const wrapperServiceDeliveryAllDivs = wrapperServiceDelivery.querySelectorAll('div');



let sliderMainImageUrl = 'url(./img/slider/' + SLIDER_ARR[0].img + ')';
sliderMain.style.backgroundImage = sliderMainImageUrl;
sliderMainTextDivSpan.innerText = SLIDER_ARR[0].heading;
sliderMainTextDivText.innerText = SLIDER_ARR[0].text;

let sliderIndex = 0;


mainCatalog.hidden = true;
mainIndex.hidden = false;
popUpMap.classList.add('visually-hidden');
formWriteUs.classList.add('visually-hidden');
document.querySelector('.service-guarantee').classList.add('visually-hidden');
document.querySelector('.service-credit').classList.add('visually-hidden');

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
  let timerId = setInterval(() => renderSlider(SLIDER_ARR, sliderArrLength), 4000)
};

function renderSlider(SLIDER_ARR) { console.info ('1');
  if (mainIndex.hidden) return;
  if (sliderIndex === sliderArrLength) {
    sliderIndex = 0;
  }
  sliderMain.style.backgroundImage = 'url(./img/slider/' + SLIDER_ARR[sliderIndex].img + ')';
  sliderMainTextDivSpan.innerText = SLIDER_ARR[sliderIndex].heading;
  sliderMainTextDivText.innerText = SLIDER_ARR[sliderIndex].text;
  ++sliderIndex;
};

sliderButtonLeft.addEventListener("click", indexSubtraction);
sliderButtonRight.addEventListener("click", indexAddition);

function indexSubtraction() {
  --sliderIndex;
  if (sliderIndex < 0) {
    sliderIndex = 0
  };
  sliderMainImageUrl = 'url(./img/slider/' + SLIDER_ARR[sliderIndex].img + ')';
  sliderMain.style.backgroundImage = sliderMainImageUrl;
  sliderMainTextDivSpan.innerText = SLIDER_ARR[sliderIndex].heading;
  sliderMainTextDivText.innerText = SLIDER_ARR[sliderIndex].text;
}

function indexAddition() {
  ++sliderIndex;
  if (sliderIndex >= sliderArrLength) {
    sliderIndex = sliderArrLength - 1
  };
  sliderMainImageUrl = 'url(./img/slider/' + SLIDER_ARR[sliderIndex].img + ')';
  sliderMain.style.backgroundImage = sliderMainImageUrl;
  sliderMainTextDivSpan.innerText = SLIDER_ARR[sliderIndex].heading;
  sliderMainTextDivText.innerText = SLIDER_ARR[sliderIndex].text;
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
    wrapperCard.innerHTML += cardRender(CARD_GOODS[i])
  }
}

function cardGoodsRenderCatalog() {
  let wrapperCard = document.getElementById('card-Goods-Ul-Catalog');
  for (let i = 0; i < 9; ++i) {
    wrapperCard.innerHTML += cardRender(CARD_GOODS[i])
  }
}

function cardRender(arr) {
  return (
    `<li class="card-item" data-id="${arr.id}">
      <img src='http://127.0.0.1:8080/img/goods/${arr.img}' alt="Drill">
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
  for (let countercardBrandsRenderIndex = 0; countercardBrandsRenderIndex < 8; ++countercardBrandsRenderIndex) {
    wrapperCard.innerHTML += cardBrandsRender(CARD_BRANDS[countercardBrandsRenderIndex]);
  }
}

function cardBrandsRender(arr) {
  return (
    `<li class="brand" style="background-image:url('http://127.0.0.1:8080/img/brands/${arr.img}')">
      <a href="#"><h3 class="visually-hidden">${arr.name}</h3></a>
     </li>`
  )
}


// Rendering services, down at Main //

buttonsService.addEventListener("click", renderServiceDown);

function renderServiceDown (ev) {

  let evTargetClass = ev.target.dataset.label;   // получаем необходимое имя класса оно же дата-метка
  document.querySelector(`.${evTargetClass}`).classList.remove('visually-hidden');
  document.querySelector(`.${evTargetClass}`).classList.add('fade-in');

  for (let indexRenderServiceDown = 0; indexRenderServiceDown < 3; indexRenderServiceDown++) {
    if (wrapperServiceDeliveryAllDivs[indexRenderServiceDown].classList.contains(evTargetClass)) {
      buttonsServiceAllButtons[indexRenderServiceDown].classList.remove('buttons-service-button');
      buttonsServiceAllButtons[indexRenderServiceDown].classList.add('buttons-service-focus');
      continue
    };
    buttonsServiceAllButtons[indexRenderServiceDown].classList.remove('buttons-service-focus');
    buttonsServiceAllButtons[indexRenderServiceDown].classList.add('buttons-service-button');
    wrapperServiceDeliveryAllDivs[indexRenderServiceDown].classList.add('visually-hidden');
    wrapperServiceDeliveryAllDivs[indexRenderServiceDown].classList.remove('fade-in');
  }
}




}












/*
черновик
/*
 * Прослушивать событие transitionend на определенном элементе, т.е. #slidingMenu
 * Затем, вызвать определенную функцию, т.е. showMessage()
 
function showMessage() {
    alert('Transition закончил свое выполнение');
}

var element = document.getElementById("slidingMenu");
element.addEventListener("transitionend", showMessage, false);*/