import productsData from "../data/data-base.js";
import  {createProductInBasket} from "./util01.js";
import { generateProductsForSliderProduct } from "../module/components/makeSliderProduct.js";
import { silderProduct } from "../module/components/makeSliderProduct.js";

const productsInBasketContainer = document.getElementById('products-in-basket-container');
const buyyouritemsbtn = document.getElementById('buy-your-items-btn');
const getItemFromLocalStorage = localStorage.getItem('idOfMainProductFromMoreDetailsPage');
const getItemFromLocalStorageParsed = [...JSON.parse(getItemFromLocalStorage)];
const totalPriceOfItems = document.getElementById('total-price-of-items');
const numberOfItems = document.getElementById('number-of-items');
const itemCounterTextHeader = document.getElementById('item-counter-text-header')
const nextArrowTodaysOff = document.getElementById('next-arrow-todays-off');
const prevArrowTodaysOff = document.getElementById('prev-arrow-todays-off');
const todaysOffProductsContainer = document.getElementById('todays-off-products-container')
const prevArrow = document.getElementById('prev-arrow');
const nextArrow = document.getElementById('next-arrow');
const relatedProductsContainer = document.getElementById('related-products-container');

const uniqId = [...new Set(getItemFromLocalStorageParsed)]




uniqId.map((productId)=>{

        productsData().map((item)=>{
            if(item.id === parseInt(productId)){
                const putProductInBasket = `
                <div id="${item.id}" class="product-card-container-user-basket-page d-flex justify-content-between p-4 width-71-percentage box-shadow-one">
                <div class="product-details-container d-flex gap-68 ">
                    <div class="product-icon-input-counter-container d-flex flex-column gap-4 align-items-center">
                        <img class="product-icon" width="200" height="200" src="${item.icon}" alt="product icon">
                        <form  class="">
                            <input id="counter-of-products-input" class="counter-of-produxts-input" type="number" value="0">
                        </form>
                    </div>
                    <div class="product-more-details-container d-flex flex-column">
                        <div class="product-name font-weight-500 f-size-24">
                        ${item.name}
                        </div>
                        <div class="product-color-container d-flex">
                            <div class="product-color-text font-weight-500 f-size-24">Color:</div>
                            <img class="product-color-icon" src="${item.color}" alt="${item.color}">
                        </div>
                        <div class="product-store font-weight-500 f-size-24">
                            shop:pc center
                        </div>
                        <div class="product-is-availabe-or-not-container d-flex">
                            <div class="product-is-availabe-or-not-text font-weight-500 f-size-24">availabe:</div>
                            <div class="product-is-availabe-or-not-icon font-weight-500 f-size-24">${item.avaibality}</div>
                        </div>
                        <div class="time-of-product-arrive font-weight-500 f-size-24">
                            time to arrive from now: 2days
                        </div>
                        <button id="delete-button-user-basket" class="delete-button font-weight-500 f-size-16 align-self-start py-1 px-3">Delete</button>
                        <div class="price-of-product fw-bold f-size-30">
                            price:${item.price}
                        </div>
                    </div>
                </div>
                <img class="more-option align-self-start" src="../img/more-details.svg" alt="more details icon">
                </div>
                `
                productsInBasketContainer.innerHTML += putProductInBasket
            };
        });

});
const productsCardArray = [...productsInBasketContainer.children]
productsCardArray.map((item)=>{
    const deleteButtonInUserBasket = item.querySelector('#delete-button-user-basket')
    deleteButtonInUserBasket.addEventListener('click',()=>{
        console.log(item)
    })
})

uniqId.map((itemId,index)=>{

    getItemFromLocalStorageParsed.map((originalItemId)=>{
        if(itemId === originalItemId){
            const productCardContainer = [...productsInBasketContainer.children]
            const productCardIconAndDetailsContainer = [...productCardContainer[index].children]
            const productImageAndInputContainer = [...productCardIconAndDetailsContainer[0].children]
            const productInputCounterContainerAndIcon = [...productImageAndInputContainer[0].children]
            const productInputCounter = productInputCounterContainerAndIcon[1][0]
            productInputCounter.value = Number(productInputCounter.value) + 1

        }
    })

})

function counterForItemsInUserBasket() {
    return getItemFromLocalStorageParsed.length
}

function totalPriceCounter() {
    let totalPriceOfProduct = 0
    uniqId.map((itemId,index)=>{
        const productCardContainer = [...productsInBasketContainer.children]
        const productCardIconAndDetailsContainer = [...productCardContainer[index].children]
        const productImageAndInputContainer = [...productCardIconAndDetailsContainer[0].children]
        const productInputCounterContainerAndIcon = [...productImageAndInputContainer[0].children]
        const productInputCounter = productInputCounterContainerAndIcon[1][0]
        productsData().map((item)=>{
            if(item.id === Number(itemId)){
                const price = parseInt(item.price) * parseInt(productInputCounter.value)
                totalPriceOfProduct = parseInt(totalPriceOfProduct) + parseInt(price)
            }
        })
    })
    return totalPriceOfProduct
}
itemCounterTextHeader.innerHTML = `Items:${counterForItemsInUserBasket()}`
numberOfItems.innerHTML = `Number of items:${counterForItemsInUserBasket()}`
totalPriceOfItems.innerHTML = `Total price:${totalPriceCounter()}`

generateProductsForSliderProduct(todaysOffProductsContainer);
silderProduct(todaysOffProductsContainer,nextArrowTodaysOff,prevArrowTodaysOff);
generateProductsForSliderProduct(relatedProductsContainer)
silderProduct(relatedProductsContainer,nextArrow,prevArrow)