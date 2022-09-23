import productsData from "../data/data-base.js";
import  {createProductInBasket} from "./util01.js";

const productsInBasketContainer = document.getElementById('products-in-basket-container');
const buyyouritemsbtn = document.getElementById('buy-your-items-btn');
const getItemFromLocalStorage = localStorage.getItem('idOfMainProductFromMoreDetailsPage');
const getItemFromLocalStorageParsed = [...JSON.parse(getItemFromLocalStorage)];

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
                            <img class="product-is-availabe-or-not-icon" src="${item.avaibality}" alt="${item.avaibality}">
                        </div>
                        <div class="time-of-product-arrive font-weight-500 f-size-24">
                            time to arrive from now: 2days
                        </div>
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


uniqId.map((item,index)=>{

    getItemFromLocalStorageParsed.map((originalItem)=>{
        if(item === originalItem){
            const test = [...productsInBasketContainer.children]
            const test01 = [...test[index].children]
            const test02 = [...test01[0].children]
            const test03 = [...test02[0].children]
            const inputTest = test03[1][0]

            inputTest.value = Number(test03[1][0].value) + 1

        }
    })

})
