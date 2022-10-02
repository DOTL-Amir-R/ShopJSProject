import productsData from "../data/data-base.js";

const mainProductContainer = document.getElementById('main-product-container');
const typeYourReviewInput = document.getElementById('type-your-review-input');
const reviewByStarsContainer = document.getElementById('review-by-stars-container');
const submitUserReviewBtn = document.getElementById('submit-user-review-btn');
const commentsOfUsersContainer = document.getElementById('comments-of-users-container');
const prevArrow = document.getElementById('prev-arrow');
const nextArrow = document.getElementById('next-arrow');
const relatedProductsContainer = document.getElementById('related-products-container');
const nextArrowTodaysOff = document.getElementById('next-arrow-todays-off');
const prevArrowTodaysOff = document.getElementById('prev-arrow-todays-off');
const todaysOffProductsContainer = document.getElementById('todays-off-products-container')

const currentProductIdFromLocalStorage = localStorage.getItem('currentProductID');

const dataFromLocalStorage = localStorage.getItem('idOfMainProductFromMoreDetailsPage');

const dataFromLocalStorageParsed = JSON.parse(dataFromLocalStorage);

const arrayShared = dataFromLocalStorageParsed || [] ;
productsData().forEach((item)=>{
    if(item.id === Number(currentProductIdFromLocalStorage)){
        const test03 = `
        <div id="${item.id}" class="main-product-container d-flex flex-column align-items-center">
        <div class="name-of-product f-size-30 font-weight-500 my-3 py-3 ">
            ${item.name}
        </div>
        <div class="product-img-container d-flex gap-30 justify-content-center">
            <img class="width-26-percentage box-shadow-one" src="${item.icon}">
            <div class="details-for-product width-39-percentage f-size-18 fw-normal box-shadow-one pt-2 ps-2">
                ${item.moreDetails}
            </div>
            <div class="buy-product-container padd-20 box-shadow-one d-flex flex-column">
                <div class="price-of-product f-size-18 fw-normal">
                ${item.price}
                </div>
                <div class="wirte-your-address f-size-18 fw-normal">
                    Write your address
                </div>
                <form>
                    <input type="number" value="1">
                </form>
                <div class="colors-cotainer d-flex">
                    <div class="colors-title f-size-18 fw-normal">
                        Colors
                    </div>
                    <div class="selected-colors-container">
                    ${item.color}
                    </div>
                </div>
                <button id="add-to-your-basket" class="f-size-18 fw-normal">
                    Add to your basket
                </button>
                <button class="f-size-18 fw-normal ">
                    Buy now
                </button>
            </div>
        </div>
        </div>
        `
        mainProductContainer.innerHTML = test03;
    }
})

function generateProductsForSliderProduct(containerOfSliderProduct){
    productsData().forEach((item)=>{
        makeNewProductCards(item,containerOfSliderProduct)
    })
}
function silderProduct(containerOfProducts , goNextProductBtn,goPrevProductBtn){
    let numberOfHowManyProductsGotPassed =0
    setInterval(() => {
        numberOfHowManyProductsGotPassed= numberOfHowManyProductsGotPassed +1
        containerOfProducts.style.left = numberOfHowManyProductsGotPassed * '-33' + '%'
    }, 3000);
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

const addToYourBasket = document.getElementById('add-to-your-basket');

addToYourBasket.addEventListener('click' , ()=>{

    const mainProductData = [...mainProductContainer.children];
    const idOfMainProduct = mainProductData[0].id;
    arrayShared.push(idOfMainProduct);

    localStorage.setItem('idOfMainProductFromMoreDetailsPage',JSON.stringify(arrayShared));

});

const reviewStarsFromUserChildrenArray = [...reviewByStarsContainer.children];
reviewByStarsContainer.addEventListener('click',(item)=>{
    const itemId = item.target.id
    switch(itemId){
        case 'first-star':
            reviewByStarsContainer.innerHTML =    `
            <img id="first-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="second-star" class="star-icon" src="../img/empty-star.svg" alt="star-review">
            <img id="third-star" class="star-icon" src="../img/empty-star.svg" alt="star-review">
            <img id="fourth-star" class="star-icon" src="../img/empty-star.svg" alt="star-review">
            <img id="fith-star" class="star-icon" src="../img/empty-star.svg" alt="star-review">
            `
            break;
        case 'second-star':
            reviewByStarsContainer.innerHTML =    `
            <img id="first-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="second-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="third-star" class="star-icon" src="../img/empty-star.svg" alt="star-review">
            <img id="fourth-star" class="star-icon" src="../img/empty-star.svg" alt="star-review">
            <img id="fith-star" class="star-icon" src="../img/empty-star.svg" alt="star-review">
            `
            break;
        case 'third-star':
            reviewByStarsContainer.innerHTML =    `
            <img id="first-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="second-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="third-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="fourth-star" class="star-icon" src="../img/empty-star.svg" alt="star-review">
            <img id="fith-star" class="star-icon" src="../img/empty-star.svg" alt="star-review">
            `
            break;
        case 'fourth-star':
            reviewByStarsContainer.innerHTML =    `
            <img id="first-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="second-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="third-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="fourth-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="fith-star" class="star-icon" src="../img/empty-star.svg" alt="star-review">
            `
            break;
        case 'fith-star':
            reviewByStarsContainer.innerHTML =    `
            <img id="first-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="second-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="third-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="fourth-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="fith-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            `
            break;
    }

});

submitUserReviewBtn.addEventListener('click',()=>{
    const userReviewInText = typeYourReviewInput.value
    const makeUserReviewInHtml = `
    <div class="user-icon-review-rating-container d-flex align-items-center gap-3">
    <div class="user-profile">
        <img class="user-profile" src="../img/empty-profile-user-circle.png" alt="user profile">
    </div>
    <div class="rate-review-comment-container d-flex flex-column ">
        <div class="rate-of-stars-container d-flex mb-3">
        ${reviewByStarsContainer.innerHTML}
        </div>
        <div class="comment-of-user mt-3 f-size-18 fw-normal">
            ${userReviewInText}
        </div>
    </div>
    </div>
    `
    commentsOfUsersContainer.innerHTML += makeUserReviewInHtml
    console.log(typeYourReviewInput.value)
});
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
function makeNewProductCards(itemData,containerForProducts){
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
    containerForProducts.innerHTML  += newProductCard

}

generateProductsForSliderProduct(relatedProductsContainer)
silderProduct(relatedProductsContainer,nextArrow,prevArrow)
generateProductsForSliderProduct(todaysOffProductsContainer)
silderProduct(todaysOffProductsContainer,nextArrowTodaysOff,prevArrowTodaysOff)
// if(nextArrow.addEventListener('click')){
//     console.log('clicked not interval')
// }else{
//     setInterval(() => {
//         console.log('interval')
//     }, 3000);
// }