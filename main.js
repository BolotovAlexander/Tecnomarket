window.onload = () => {

const sliderArr = [
  {
    name: "perforator",
    img: "slider_perforator.jpg",
    heading: "ПЕРФОРАТОРЫ",
    text: "Настоящие мужские игрушки",
  },
  {
    name: "drill",
    img: "slider_drill.jpg",
    heading: "ДРЕЛИ",
    text: "Соседям на радость!",
  },
  {
    name: "tape",
    img: "slider_blueTape.png",
    heading: "СИНЯЯ ИЗОЛЕНТА",
    text: "Когда остальное бессильно",
  },
  {
    name: "kittens",
    img: "slider_kittens.jpg",
    heading: "КОТЯТКИ",
    text: "Все любят котяток :)",
  },
];
 
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

let i = 0;


mainCatalog.hidden = true;
mainIndex.hidden = false;
popUpMap.classList.add('visually-hidden');
formWriteUs.classList.add('visually-hidden');
idHeaderMiddleElementRightForm.style.display = "none";


// Main index/catalog change //

sliderOpenCatalogButton.addEventListener("click",renderCatalogSite);

function renderIndexSite() {
  technomartLinkUp.removeEventListener("click",renderIndexSite);
  technomartLinkDown.removeEventListener("click",renderIndexSite);
  mainCatalog.hidden = true;
  mainIndex.hidden = false;
  sliderOpenCatalogButton.addEventListener("click",renderCatalogSite);
}

function renderCatalogSite() {
  sliderButtonLeft.removeEventListener("click", iSubtraction);
  sliderButtonRight.removeEventListener("click", iAddition);
  sliderOpenCatalogButton.removeEventListener("click",renderCatalogSite);
  mainIndex.hidden = true;
  mainCatalog.hidden = false;
  technomartLinkUp.addEventListener("click",renderIndexSite);
  technomartLinkDown.addEventListener("click",renderIndexSite);
}
 
// main slider //

if (mainIndex.hidden == false) { 
  let timerId = setInterval(() => renderSlider(sliderArr,sliderArrLength), 4000)
};


function renderSlider(sliderArr) {
  if (mainIndex.hidden) return ;
  if (i == sliderArrLength) {i = 0};
  console.info(i);
  sliderMainImageUrl = 'url(./img/slider/' + sliderArr[i].img + ')';
  sliderMain.style.backgroundImage = sliderMainImageUrl;
  sliderMainTextDivSpan.innerText = sliderArr[i].heading;
  sliderMainTextDivText.innerText = sliderArr[i].text;
  ++i; 
};

sliderButtonLeft.addEventListener("click", iSubtraction);
sliderButtonRight.addEventListener("click", iAddition);

function iSubtraction(){
  --i;
  if (i < 0) {i = 0};
  sliderMainImageUrl = 'url(./img/slider/' + sliderArr[i].img + ')';
  sliderMain.style.backgroundImage = sliderMainImageUrl;
  sliderMainTextDivSpan.innerText = sliderArr[i].heading;
  sliderMainTextDivText.innerText = sliderArr[i].text;
}

function iAddition(){
  ++i;
  if (i >= sliderArrLength) {i = sliderArrLength - 1};
  sliderMainImageUrl = 'url(./img/slider/' + sliderArr[i].img + ')';
  sliderMain.style.backgroundImage = sliderMainImageUrl;
  sliderMainTextDivSpan.innerText = sliderArr[i].heading;
  sliderMainTextDivText.innerText = sliderArr[i].text;
}


// Pop Up Map //

buttonPopUpMapOpen.addEventListener("click", mapOpen);

function mapOpen() {
  buttonPopUpMapOpen.removeEventListener("click", mapOpen);
  popUpMap.classList.remove('visually-hidden');
  buttonPopUpBigMapClose.addEventListener("click", mapClose);
}

function mapClose() {
  buttonPopUpBigMapClose.removeEventListener("click", mapClose)
  popUpMap.classList.add('visually-hidden');
  buttonPopUpMapOpen.addEventListener("click", mapOpen);
}


// Form "Write us" //

buttonWriteUs.addEventListener("click", formWriteUsOpen);

function formWriteUsOpen() {
  buttonPopUpMapOpen.removeEventListener("click", formWriteUsOpen);
  formWriteUs.classList.remove('visually-hidden');
  buttonPopUpWriteUsFormClose.addEventListener("click", formWriteUsClose);
}

function formWriteUsClose() {
  buttonPopUpWriteUsFormClose.removeEventListener("click", formWriteUsClose)
  formWriteUs.classList.add('visually-hidden');
  buttonPopUpMapOpen.addEventListener("click", formWriteUsOpen);
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








}