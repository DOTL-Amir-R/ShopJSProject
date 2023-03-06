import { generateProductsForSliderProduct } from "../module/components/makeSliderProduct.js";
import { silderProduct } from "../module/components/makeSliderProduct.js";

const relatedProductsContainer = document.getElementById('related-products-container');
const prevArrow = document.getElementById('prev-arrow');
const nextArrow = document.getElementById('next-arrow');
const mainHeroSectionTextAndIconProductsPage = document.getElementById('main-hero-section-text-and-icon-products-page');
const prevButtonMainHeroSection = document.getElementById('prev-button-main-hero-section');
const nextButtonMainHeroSection = document.getElementById('next-button-main-hero-section');
const productsContainerHomePage = document.getElementById('products-container-home-page');

function createNewProductHomePage(item) {
    `
    <div id="${item.id}" class="products-container d-flex align-items-center">
    <div class="text-offer-of-product red-color fw-bold f-size-20">
        50%Off
    </div>


    `
}
const arrayOfSliderPictures = [
    'url(../img/product-one.png)',
    'url(../img/car-first.jpg)',
    'url(../img/car-second.jpg)',
    'url(../img/car-third.jpg)',
    'url(../img/../img/hero-section-img.png)',

];
let indexOfImageArray = 0
setInterval(() => {
    if(indexOfImageArray === arrayOfSliderPictures.length -1 ){
        indexOfImageArray = 0
    }else{
        indexOfImageArray = indexOfImageArray+1
    }
    mainHeroSectionTextAndIconProductsPage.style.backgroundImage = arrayOfSliderPictures[indexOfImageArray]
}, 6000);
prevButtonMainHeroSection.addEventListener('click',()=>{
    if(indexOfImageArray !== 0){
        indexOfImageArray = indexOfImageArray-1
    }
    mainHeroSectionTextAndIconProductsPage.style.backgroundImage = arrayOfSliderPictures[indexOfImageArray]
})
nextButtonMainHeroSection.addEventListener('click',()=>{
    if(indexOfImageArray !== arrayOfSliderPictures.length -1){
        indexOfImageArray = indexOfImageArray+1
    }
    mainHeroSectionTextAndIconProductsPage.style.backgroundImage = arrayOfSliderPictures[indexOfImageArray]
})
generateProductsForSliderProduct(relatedProductsContainer)
silderProduct(relatedProductsContainer,nextArrow,prevArrow)