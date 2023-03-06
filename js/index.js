import productsData from "../data/data-base.js";
const allProductsCardContainerProductsPage = document.getElementById('all-products-card-container-products-page');

const mainProductContainer = document.getElementById('main-product-container');
const ratingOneStarFilterBox = document.getElementById('rating-one-star-filter-box');
const ratingTwoStarFilterBox = document.getElementById('rating-two-star-filter-box');
const ratingThreeStarFilterBox = document.getElementById('rating-three-star-filter-box');
const ratingFourStarFilterBox = document.getElementById('rating-four-star-filter-box');
const ratingFiveStarFilterBox = document.getElementById('rating-five-star-filter-box');
const deleteAllFilters = document.getElementById('delete-all-filters');
const highestToLowestFilterBox = document.getElementById('highest-to-lowest-filter-box');
const lowestTohighestFilterBox = document.getElementById('lowest-to-highest-filter-box');
const modelFilterHpCheckBox = document.getElementById('model-hp-checkbox');
const modelFilterAsusCheckBox = document.getElementById('model-asus-checkbox');
const modelFilterAcerCheckBox = document.getElementById('model-acer-checkbox');
const mainHeroSectionTextAndIconProductsPage = document.getElementById('main-hero-section-text-and-icon-products-page');
const prevButtonMainHeroSection = document.getElementById('prev-button-main-hero-section');
const nextButtonMainHeroSection = document.getElementById('next-button-main-hero-section');
const searchInputProductPage = document.getElementById('search-input-product-page')
const searchIconProductPage = document.getElementById('search-icon-product-page')
let isOneStaredBoxFilled = true
let isTwoStaredBoxFilled = true
let isThreeStaredBoxFilled = true
let isFourStaredBoxFilled = true
let isFiveStaredBoxFilled = true
let isHieghestToLowestFilled = true;
let isLowestToHieghestFilled = true;
let isFilterModelHpFilled = true;
let isFilterModelAsusFilled = true;
let isFilterModelAcerFilled = true;

function makeStarsForProducts(testItem){
    switch(testItem.rating){
        case 5:
            return `                            
            <img class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img class="star-icon" src="../img/filled-star.svg" alt="star-review">
            `
        case 4:
             return `                            
            <img class="star-icon" src="../img/empty-star.svg" alt="star-review">
            <img class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img class="star-icon" src="../img/filled-star.svg" alt="star-review">
            `
        case 3:

             return `                            
            <img class="star-icon" src="../img/empty-star.svg" alt="star-review">
            <img class="star-icon" src="../img/empty-star.svg" alt="star-review">
            <img class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img class="star-icon" src="../img/filled-star.svg" alt="star-review">
            `
        case 2:

            return `                            
            <img class="star-icon" src="../img/empty-star.svg" alt="star-review">
            <img class="star-icon" src="../img/empty-star.svg" alt="star-review">
            <img class="star-icon" src="../img/empty-star.svg" alt="star-review">
            <img class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img class="star-icon" src="../img/filled-star.svg" alt="star-review">
            `
        case 1:

            return `                            
            <img class="star-icon" src="../img/empty-star.svg" alt="star-review">
            <img class="star-icon" src="../img/empty-star.svg" alt="star-review">
            <img class="star-icon" src="../img/empty-star.svg" alt="star-review">
            <img class="star-icon" src="../img/empty-star.svg" alt="star-review">
            <img class="star-icon" src="../img/filled-star.svg" alt="star-review">
            `  
        case 0 :
            return `                            
            <img class="star-icon" src="../img/empty-star.svg" alt="star-review">
            <img class="star-icon" src="../img/empty-star.svg" alt="star-review">
            <img class="star-icon" src="../img/empty-star.svg" alt="star-review">
            <img class="star-icon" src="../img/empty-star.svg" alt="star-review">
            <img class="star-icon" src="../img/empty-star.svg" alt="star-review">
            `
    }
};
// new products cards function you need to fix the last line for better performance
function makeNewProductCards(itemData){
    const newProductCard = 
    `<a id="${itemData.id}" href="./more-detail-for-one-product.html">
        <div  data-rating="${itemData.rating}" class="product-card-container-products-page box-shadow-one">
            <img class="product-icon" src="${itemData.icon}" alt="product icon">
            <div class="name-and-model-of-product-container d-flex justify-content-between">
                <div class="name-of-product f-size-20 white-color-fafafa font-weight-500">
                    ${itemData.name}
                </div>
                <div class="model-of-product f-size-20 white-color-fafafa font-weight-500">
                    ${itemData.model}
                </div>
            </div>
            <div class="prices-of-product-container d-flex flex-column">
                <div class="new-price-of-product f-size-20 white-color-fafafa fw-bold">
                    ${itemData.price}
                </div>
                <div class="old-price-of-product f-size-14 text-decoration-line-through gray-color-8F8E8E fw-normal">
                    50000T
                </div>
            </div>
            <div class="more-btn-and-star-review-of-product-container d-flex justify-content-between ">
                <div href="" class="more-btn-of-product f-size-16 cyan-color-00FFE0">
                    more...
                </div>
                <div class="star-review-of-product-container d-flex">
                    ${makeStarsForProducts(itemData)}
                </div>
            </div>
        </div> 
    </a>`
    allProductsCardContainerProductsPage.innerHTML  += newProductCard
}
productsData().map((item)=>{
    makeNewProductCards(item)
})

function getProductIdAndSendItToLocalStorage(){
    let productsArray = [...allProductsCardContainerProductsPage.children]
    // console.log(productsArray)
    productsArray.forEach((product)=>{
        product.addEventListener('click',()=>{
            productsData().forEach((backData)=>{
                if(Number(product.id) === Number(backData.id)  ){
                    localStorage.setItem('currentProductID',JSON.stringify(backData.id))
                }
            })
        })
    })
}
 

getProductIdAndSendItToLocalStorage()

deleteAllFilters.addEventListener('click',()=>{
    allProductsCardContainerProductsPage.innerHTML = ""
    productsData().forEach((item)=>{
        makeNewProductCards(item)
    })
    getProductIdAndSendItToLocalStorage()
})

searchInputProductPage.addEventListener('keyup',()=>{
    allProductsCardContainerProductsPage.innerHTML = ''
    const productNameInSearchInput = searchInputProductPage.value.toLowerCase()
    productsData().forEach((item)=>{
        if(item.name.includes(productNameInSearchInput)){
            makeNewProductCards(item)
        }
    })
    getProductIdAndSendItToLocalStorage()
})
ratingOneStarFilterBox.addEventListener('click',()=>{
    allProductsCardContainerProductsPage.innerHTML = ""
    if(isOneStaredBoxFilled){
        ratingOneStarFilterBox.src = '../img/filled-box.svg';
        ratingTwoStarFilterBox.src = '../img/empty-box.svg';
        ratingThreeStarFilterBox.src = '../img/empty-box.svg';
        ratingFourStarFilterBox.src = '../img/empty-box.svg';
        ratingFiveStarFilterBox.src = '../img/empty-box.svg';
        isOneStaredBoxFilled = false;
        isTwoStaredBoxFilled = true;
        isThreeStaredBoxFilled = true;
        isFourStaredBoxFilled = true;
        isFiveStaredBoxFilled = true;
        productsData().forEach((item)=>{
            if(item.rating === 1){
                makeNewProductCards(item)
    
            }
        })
        getProductIdAndSendItToLocalStorage()

    }else{
        ratingOneStarFilterBox.src = '../img/empty-box.svg';
        isOneStaredBoxFilled = true
        productsData().forEach((item)=>{
            makeNewProductCards(item)
        })
        getProductIdAndSendItToLocalStorage()
    }

})
ratingTwoStarFilterBox.addEventListener('click',()=>{
    allProductsCardContainerProductsPage.innerHTML = ""
    if(isTwoStaredBoxFilled){
        ratingTwoStarFilterBox.src = '../img/filled-box.svg';
        ratingOneStarFilterBox.src = '../img/empty-box.svg';
        ratingThreeStarFilterBox.src = '../img/empty-box.svg';
        ratingFourStarFilterBox.src = '../img/empty-box.svg';
        ratingFiveStarFilterBox.src = '../img/empty-box.svg';
        isOneStaredBoxFilled = true;
        isTwoStaredBoxFilled = false;
        isThreeStaredBoxFilled = true;
        isFourStaredBoxFilled = true;
        isFiveStaredBoxFilled = true;
        productsData().forEach((item)=>{
            if(item.rating === 2){
                
                makeNewProductCards(item)
            }
        })
        getProductIdAndSendItToLocalStorage()
    }else{
        ratingTwoStarFilterBox.src = '../img/empty-box.svg';
        isTwoStaredBoxFilled = true
        productsData().forEach((item)=>{
            makeNewProductCards(item)
        })
        getProductIdAndSendItToLocalStorage()
    }

})
ratingThreeStarFilterBox.addEventListener('click',()=>{
    allProductsCardContainerProductsPage.innerHTML = ""
    if(isThreeStaredBoxFilled){
        ratingThreeStarFilterBox.src = '../img/filled-box.svg';
        ratingTwoStarFilterBox.src = '../img/empty-box.svg';
        ratingOneStarFilterBox.src = '../img/empty-box.svg';
        ratingFourStarFilterBox.src = '../img/empty-box.svg';
        ratingFiveStarFilterBox.src = '../img/empty-box.svg';
        isOneStaredBoxFilled = true;
        isTwoStaredBoxFilled = true;
        isThreeStaredBoxFilled = false;
        isFourStaredBoxFilled = true;
        isFiveStaredBoxFilled = true;
        productsData().forEach((item)=>{
            if(item.rating === 3){
                makeNewProductCards(item)
            }
        })
        getProductIdAndSendItToLocalStorage()
    }else{
        ratingThreeStarFilterBox.src = '../img/empty-box.svg';
        isThreeStaredBoxFilled = true
        productsData().forEach((item)=>{
            makeNewProductCards(item)
        })
        getProductIdAndSendItToLocalStorage()
    }

})
ratingFourStarFilterBox.addEventListener('click',()=>{
    allProductsCardContainerProductsPage.innerHTML = ""
    if(isFourStaredBoxFilled){
        ratingFourStarFilterBox.src = '../img/filled-box.svg';
        ratingTwoStarFilterBox.src = '../img/empty-box.svg';
        ratingThreeStarFilterBox.src = '../img/empty-box.svg';
        ratingOneStarFilterBox.src = '../img/empty-box.svg';
        ratingFiveStarFilterBox.src = '../img/empty-box.svg';
        isOneStaredBoxFilled = true;
        isTwoStaredBoxFilled = true;
        isThreeStaredBoxFilled = true;
        isFourStaredBoxFilled = false;
        isFiveStaredBoxFilled = true;
        productsData().forEach((item)=>{
            if(item.rating === 4){
                
                makeNewProductCards(item)
            }
        })
        getProductIdAndSendItToLocalStorage()
    }else{
        ratingFourStarFilterBox.src = '../img/empty-box.svg';
        isFourStaredBoxFilled = true;
        productsData().forEach((item)=>{
            makeNewProductCards(item)
        })
        getProductIdAndSendItToLocalStorage()
    }

})
ratingFiveStarFilterBox.addEventListener('click',()=>{
    allProductsCardContainerProductsPage.innerHTML = ""
    if(isFiveStaredBoxFilled){
        ratingFiveStarFilterBox.src = '../img/filled-box.svg';
        ratingTwoStarFilterBox.src = '../img/empty-box.svg';
        ratingThreeStarFilterBox.src = '../img/empty-box.svg';
        ratingFourStarFilterBox.src = '../img/empty-box.svg';
        ratingOneStarFilterBox.src = '../img/empty-box.svg';
        isOneStaredBoxFilled = true;
        isTwoStaredBoxFilled = true;
        isThreeStaredBoxFilled = true;
        isFourStaredBoxFilled = true;
        isFiveStaredBoxFilled = false;
        productsData().forEach((item)=>{
            if(item.rating === 5){
                makeNewProductCards(item)
            }
        })
        getProductIdAndSendItToLocalStorage()
    }else{
        ratingFiveStarFilterBox.src = '../img/empty-box.svg';
        isFiveStaredBoxFilled = true;
        productsData().forEach((item)=>{
            makeNewProductCards(item)
        })
        getProductIdAndSendItToLocalStorage()
    }

})
highestToLowestFilterBox.addEventListener('click',()=>{
    allProductsCardContainerProductsPage.innerHTML = ""
    if(isHieghestToLowestFilled){
        highestToLowestFilterBox.src = '../img/filled-box.svg';
        lowestTohighestFilterBox.src = '../img/empty-box.svg';
        isLowestToHieghestFilled = true
        isHieghestToLowestFilled = false
        const newSortedByPriceArray = productsData().sort((a,b)=> parseInt(b.price)-parseInt(a.price))

        newSortedByPriceArray.forEach((item)=>{
            makeNewProductCards(item)
        })
        getProductIdAndSendItToLocalStorage()
    }else{
        highestToLowestFilterBox.src = '../img/empty-box.svg';
        isHieghestToLowestFilled = true
        productsData().forEach((item)=>{
            makeNewProductCards(item)
        })
        getProductIdAndSendItToLocalStorage()
    }

})
lowestTohighestFilterBox.addEventListener('click',()=>{
    allProductsCardContainerProductsPage.innerHTML = ""
    if(isLowestToHieghestFilled){
        lowestTohighestFilterBox.src = '../img/filled-box.svg';
        highestToLowestFilterBox.src = '../img/empty-box.svg';
        isHieghestToLowestFilled = true
        isLowestToHieghestFilled = false
        const newSortedByPriceArray = productsData().sort((a,b)=> parseInt(a.price)-parseInt(b.price))

        newSortedByPriceArray.forEach((item)=>{
            makeNewProductCards(item)
        })
        getProductIdAndSendItToLocalStorage()
    }else{
        lowestTohighestFilterBox.src = '../img/empty-box.svg';
        isLowestToHieghestFilled = true
        productsData().forEach((item)=>{
            makeNewProductCards(item)
        })
        getProductIdAndSendItToLocalStorage()
    }

})
modelFilterHpCheckBox.addEventListener('click',()=>{
    allProductsCardContainerProductsPage.innerHTML = ""
    if(isFilterModelHpFilled){
        modelFilterHpCheckBox.src = '../img/filled-box.svg';
        modelFilterAsusCheckBox.src = '../img/empty-box.svg';
        modelFilterAcerCheckBox.src = '../img/empty-box.svg';
        isFilterModelAsusFilled = true;
        isFilterModelAcerFilled = true;
        isFilterModelHpFilled = false
        const newFilterByModelHp = productsData().forEach((item)=>{
            if(item.model === 'hp'){
                makeNewProductCards(item)
            }
        })
        getProductIdAndSendItToLocalStorage()
    }else{
        modelFilterHpCheckBox.src = '../img/empty-box.svg';
        isFilterModelHpFilled = true
        productsData().forEach((item)=>{
            makeNewProductCards(item)
        })
        getProductIdAndSendItToLocalStorage()
    }

})
modelFilterAsusCheckBox.addEventListener('click',()=>{
    allProductsCardContainerProductsPage.innerHTML = "";
    if(isFilterModelAsusFilled){
        modelFilterHpCheckBox.src = '../img/empty-box.svg';
        modelFilterAsusCheckBox.src = '../img/filled-box.svg';
        modelFilterAcerCheckBox.src = '../img/empty-box.svg';
        isFilterModelAsusFilled = false;
        isFilterModelAcerFilled = true;
        isFilterModelHpFilled = true;
        const newFilterByModelAsus = productsData().forEach((item)=>{
            if(item.model === 'asus'){
                makeNewProductCards(item)
            }
        })
        getProductIdAndSendItToLocalStorage()
    }else{
        modelFilterAsusCheckBox.src = '../img/empty-box.svg';
        isFilterModelAsusFilled = true
        productsData().forEach((item)=>{
            makeNewProductCards(item)
        })
        getProductIdAndSendItToLocalStorage()
    }

});
modelFilterAcerCheckBox.addEventListener('click',()=>{
    allProductsCardContainerProductsPage.innerHTML = "";
    if(isFilterModelAcerFilled){
        modelFilterHpCheckBox.src = '../img/empty-box.svg';
        modelFilterAsusCheckBox.src = '../img/empty-box.svg';
        modelFilterAcerCheckBox.src = '../img/filled-box.svg';
        isFilterModelAsusFilled = true;
        isFilterModelAcerFilled = false;
        isFilterModelHpFilled = true;
        const newFilterByModelAcer = productsData().forEach((item)=>{
            if(item.model === 'acer'){
                makeNewProductCards(item)
            }
        })
        getProductIdAndSendItToLocalStorage()
    }else{
        modelFilterAcerCheckBox.src = '../img/empty-box.svg';
        isFilterModelAcerFilled = true
        productsData().forEach((item)=>{
            makeNewProductCards(item)
        })
        getProductIdAndSendItToLocalStorage()
    }

});
searchIconProductPage.addEventListener('click',()=>{
    searchInputProductPage.style.width = '20rem'
    searchInputProductPage.style.padding = '0rem .5rem'

})


const arrayOfSliderPictures = [
    'url(../img/product-one.png)',
    'url(../img/mouse-second.png)',
    'url(../img/mouse-third.png)',
    'url(../img/gtx-icon.png)',
    'url(../img/../img/hero-section-img.png)',

]
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


