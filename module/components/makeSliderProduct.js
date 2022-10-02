import productsData from "../../data/data-base.js";
import { makeNewProductCards } from "./makeProductCard.js";

export function generateProductsForSliderProduct(containerOfSliderProduct){
    productsData().forEach((item)=>{
        makeNewProductCards(item,containerOfSliderProduct)
    })
}
export function silderProduct(containerOfProducts , goNextProductBtn,goPrevProductBtn){
    let numberOfHowManyProductsGotPassed =0
    // if(numberOfHowManyProductsGotPassed !== containerOfProducts.children.length - 3){
    //     setInterval(() => {
    //         numberOfHowManyProductsGotPassed= numberOfHowManyProductsGotPassed +1
    //         console.log(numberOfHowManyProductsGotPassed)
    //         containerOfProducts.style.left = numberOfHowManyProductsGotPassed * '-33' + '%'
    //     }, 3000);
    // }
    goNextProductBtn.addEventListener('click',()=>{
        if(numberOfHowManyProductsGotPassed !== containerOfProducts.children.length - 3){
            numberOfHowManyProductsGotPassed= numberOfHowManyProductsGotPassed +1
            containerOfProducts.style.left = numberOfHowManyProductsGotPassed * '-33' + '%'
            console.log('nice')
        };
    });
    goPrevProductBtn.addEventListener('click',()=>{
        if(numberOfHowManyProductsGotPassed !== 0){
            numberOfHowManyProductsGotPassed= numberOfHowManyProductsGotPassed -1
            containerOfProducts.style.left = numberOfHowManyProductsGotPassed * '-33' + '%'
        };
    });
}