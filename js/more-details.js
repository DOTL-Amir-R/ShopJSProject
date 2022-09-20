import productsData from "../data/data-base.js";
// import { createProductInBasket } from "./util01.js";
const mainProductContainer = document.getElementById('main-product-container');
const typeYourReviewInput = document.getElementById('type-your-review-input');
const reviewByStarsContainer = document.getElementById('review-by-stars-container');
const submitUserReviewBtn = document.getElementById('submit-user-review-btn');
const commentsOfUsersContainer = document.getElementById('comments-of-users-container');
// const firstStar = document.getElementById('first-star')
// const secondStar = document.getElementById('second-star')
// const thirdStar = document.getElementById('third-star')
// const fourthStar = document.getElementById('fourth-star')
// const fithStar = document.getElementById('fith-star')
const moreDatilsDataFromLocanStorage = localStorage.getItem('moreDetailsData');

const dataFromLocalStorage = localStorage.getItem('idOfMainProductFromMoreDetailsPage');
console.log(dataFromLocalStorage)
const dataFromLocalStorageParsed = JSON.parse(dataFromLocalStorage);

const arrayShared = dataFromLocalStorageParsed || [] ;

mainProductContainer.innerHTML = JSON.parse(moreDatilsDataFromLocanStorage);


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
