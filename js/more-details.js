import productsData from "../data/data-base.js";
import { generateProductsForSliderProduct } from "../module/components/makeSliderProduct.js";
import { silderProduct } from "../module/components/makeSliderProduct.js";

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
const todaysOffProductsContainer = document.getElementById('todays-off-products-container');
const ratingOfStarsInPercentageForOneStar = document.getElementById('rating-of-stars-in-percentage-for-one-star');
const ratingOfStarsInPercentageForTwoStar = document.getElementById('rating-of-stars-in-percentage-for-two-star');
const ratingOfStarsInPercentageForThreeStar = document.getElementById('rating-of-stars-in-percentage-for-three-star');
const ratingOfStarsInPercentageForFourStar = document.getElementById('rating-of-stars-in-percentage-for-four-star');
const ratingOfStarsInPercentageForFiveStar = document.getElementById('rating-of-stars-in-percentage-for-five-star');
const progressBarFiveStars = document.getElementById('progress-bar-five-stars');
const progressBarFourStars = document.getElementById('progress-bar-four-stars');
const progressBarThreeStars = document.getElementById('progress-bar-three-stars');
const progressBarTwoStars = document.getElementById('progress-bar-two-stars');
const progressBarOneStars = document.getElementById('progress-bar-one-stars');
const howManyUsersVoted = document.getElementById('how-many-users-voted');
const totalRatingStarsInNumber = document.getElementById('total-rating-stars-in-number');
let arrayOfReview = JSON.parse(localStorage.getItem('arrayOfReviewStars')) || []

const currentProductIdFromLocalStorage = localStorage.getItem('currentProductID');

const dataFromLocalStorage = localStorage.getItem('idOfMainProductFromMoreDetailsPage');

const dataFromLocalStorageParsed =JSON.parse(dataFromLocalStorage);

const arrayShared = dataFromLocalStorageParsed || [] ;

function generateReviews() {
    localStorage.setItem('arrayOfReviewStars',JSON.stringify(arrayOfReview));
    const arrayOfReviewStarsFromLocalStorage = JSON.parse(localStorage.getItem('arrayOfReviewStars'))

    const numberOfStars = [1,2,3,4,5]
    numberOfStars.map((state)=>{
        const arrayOfReviewStars = arrayOfReviewStarsFromLocalStorage.filter((item)=>parseInt(item) === state);
        const lengthOfAllStarsArray = arrayOfReviewStarsFromLocalStorage.length;
        const lengthOfIndividualArray = arrayOfReviewStars.length;


        let percentageOfIndividualStars = `${(parseInt(lengthOfIndividualArray)*100)/parseInt(lengthOfAllStarsArray)}`;
        if(percentageOfIndividualStars === 'NaN'){
            percentageOfIndividualStars = `0`
        }

        howManyUsersVoted.innerHTML = `${lengthOfAllStarsArray} ratings`
        switch (state) {
            case 1:
                ratingOfStarsInPercentageForOneStar.innerHTML = `${(percentageOfIndividualStars).slice(0,3)}%`;
                progressBarOneStars.style.width = `${(percentageOfIndividualStars)}%`;
                break;
            case 2:
                ratingOfStarsInPercentageForTwoStar.innerHTML = `${(percentageOfIndividualStars).slice(0,3)}%`;
                progressBarTwoStars.style.width = `${(percentageOfIndividualStars)}%`;

                break;
            case 3:
                ratingOfStarsInPercentageForThreeStar.innerHTML = `${(percentageOfIndividualStars).slice(0,3)}%`;
                progressBarThreeStars.style.width = `${(percentageOfIndividualStars)}%`;
                break;
            case 4:
                ratingOfStarsInPercentageForFourStar.innerHTML = `${(percentageOfIndividualStars).slice(0,3)}%`;
                progressBarFourStars.style.width = `${(percentageOfIndividualStars)}%`;
                break;
            case 5:
                ratingOfStarsInPercentageForFiveStar.innerHTML = `${(percentageOfIndividualStars).slice(0,3)}%`;
                progressBarFiveStars.style.width = `${(percentageOfIndividualStars)}%`;
                break;
        }
    })

}
generateReviews()
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
            <div class="buy-product-container padd-20 box-shadow-one d-flex flex-column align-items-center">
                <div class="price-of-product f-size-18 fw-normal pt-4 mb-3">
                ${item.price}
                </div>

                <form class="mb-3 d-flex  justify-content-center">

                        <button id="plus-btn-more-details-page" class="plus-btn border-end-0 f-size-24 fw-bold background-fafafa ps-2 border-1-333333">
                            +
                        </button>
                        <input id="input-for-determine-number-of-products" class="input-for-determine-number-of-products width-26-percentage background-fafafa" type="number" value="0">
                        <button id="mines-btn-more-details-page" class="mines-btn  f-size-24 fw-bold border-start-0 background-fafafa pe-3 border-1-333333" >
                            -
                        </button>

                </form>

                <div class="colors-cotainer d-flex mb-3">
                    <div class="colors-title f-size-18 fw-normal">
                        Colors
                    </div>
                    <img class="selected-colors-container" src="${item.color}">
                    
                    </img>
                </div>
                <button id="add-to-your-basket" class="f-size-18 fw-normal mb-3 first-button-blue">
                    Add to your basket
                </button>
                <button class="f-size-18 fw-normal first-button-blue">
                    Buy now
                </button>
            </div>
        </div>
        </div>
        `
        mainProductContainer.innerHTML = test03;
    }
})
const minesBtnMoreDetailsPage = document.getElementById('mines-btn-more-details-page');
const plusBtnMoreDetailsPage = document.getElementById('plus-btn-more-details-page');


const mainProductData = [...mainProductContainer.children];
const addToYourBasket = document.getElementById('add-to-your-basket');



const reviewStarsFromUserChildrenArray = [...reviewByStarsContainer.children];

let currentStar = 5
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

            currentStar = 1
            break;
        case 'second-star':
            reviewByStarsContainer.innerHTML =    `
            <img id="first-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="second-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="third-star" class="star-icon" src="../img/empty-star.svg" alt="star-review">
            <img id="fourth-star" class="star-icon" src="../img/empty-star.svg" alt="star-review">
            <img id="fith-star" class="star-icon" src="../img/empty-star.svg" alt="star-review">
            `
            currentStar = 2
            break;
        case 'third-star':
            reviewByStarsContainer.innerHTML =    `
            <img id="first-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="second-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="third-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="fourth-star" class="star-icon" src="../img/empty-star.svg" alt="star-review">
            <img id="fith-star" class="star-icon" src="../img/empty-star.svg" alt="star-review">
            `
            currentStar = 3
            break;
        case 'fourth-star':
            reviewByStarsContainer.innerHTML =    `
            <img id="first-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="second-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="third-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="fourth-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="fith-star" class="star-icon" src="../img/empty-star.svg" alt="star-review">
            `
            currentStar = 4
            break;
        case 'fith-star':
            reviewByStarsContainer.innerHTML =    `
            <img id="first-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="second-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="third-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="fourth-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            <img id="fith-star" class="star-icon" src="../img/filled-star.svg" alt="star-review">
            `
            currentStar = 5
            break;
    }

});

let sumOfStars = 0

submitUserReviewBtn.addEventListener('click',()=>{
    arrayOfReview.push(currentStar);
    const sumOfStarsFromLocalStorage = localStorage.getItem('sumOfTotalStars')
    console.log(sumOfStarsFromLocalStorage)
    sumOfStars = JSON.parse(sumOfStarsFromLocalStorage)
    sumOfStars = sumOfStars + currentStar;
    let averageOfCustomersStarInText = `${sumOfStars/arrayOfReview.length}`;
    totalRatingStarsInNumber.innerHTML = `${averageOfCustomersStarInText.slice(0,3)} out of 5`;
    localStorage.setItem('sumOfTotalStars',JSON.stringify(sumOfStars))
    generateReviews();

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

});


generateProductsForSliderProduct(relatedProductsContainer)
silderProduct(relatedProductsContainer,nextArrow,prevArrow)
generateProductsForSliderProduct(todaysOffProductsContainer)
silderProduct(todaysOffProductsContainer,nextArrowTodaysOff,prevArrowTodaysOff)

let inputOfNumberOfproducts = mainProductData[0].querySelector('#input-for-determine-number-of-products');
plusBtnMoreDetailsPage.addEventListener('click',(e)=>{
    e.preventDefault()
    inputOfNumberOfproducts.value = parseInt(inputOfNumberOfproducts.value) +1
});
minesBtnMoreDetailsPage.addEventListener('click',(e)=>{
    e.preventDefault()
    if(parseInt(inputOfNumberOfproducts.value) === 0){
        return
    }
    inputOfNumberOfproducts.value = parseInt(inputOfNumberOfproducts.value) -1


});

let multipliOfIndividualProductArray =[]
let i = 0


addToYourBasket.addEventListener('click' , ()=>{


    const idOfMainProduct = mainProductData[0].id;
    arrayShared.push(idOfMainProduct);

    localStorage.setItem('idOfMainProductFromMoreDetailsPage',JSON.stringify(arrayShared));

    let arraySharedByNewArray = [...arrayShared]
    i = 0
    while (inputOfNumberOfproducts.value > i +1 ) {
        i++
        multipliOfIndividualProductArray.push(mainProductData[0].id)
    }

    arraySharedByNewArray = [...multipliOfIndividualProductArray , ...arrayShared]

    localStorage.setItem('idOfMainProductFromMoreDetailsPage',JSON.stringify(arraySharedByNewArray));
});

