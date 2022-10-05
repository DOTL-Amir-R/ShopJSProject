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
const nrevButtonMainHeroSection = document.getElementById('prev-button-main-hero-section');


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
// in male new products cards function you need to fix the last line for better performance
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

const productsArray = [...allProductsCardContainerProductsPage.children] 

productsArray.forEach((product)=>{
    product.addEventListener('click',()=>{
        productsData().forEach((backData)=>{
            if(Number(product.id) === Number(backData.id)  ){
                localStorage.setItem('currentProductID',JSON.stringify(backData.id))
            }
        })
    })
})

deleteAllFilters.addEventListener('click',()=>{
    allProductsCardContainerProductsPage.innerHTML = ""
    productsData().forEach((item)=>{
        makeNewProductCards(item)
    })
})

ratingOneStarFilterBox.addEventListener('click',()=>{
    allProductsCardContainerProductsPage.innerHTML = ""
    productsData().forEach((item)=>{
        if(item.rating === 1){
            makeNewProductCards(item)

        }
    })
})
ratingTwoStarFilterBox.addEventListener('click',()=>{
    allProductsCardContainerProductsPage.innerHTML = ""
    productsData().forEach((item)=>{
        if(item.rating === 2){
            
            makeNewProductCards(item)
        }
    })
})
ratingThreeStarFilterBox.addEventListener('click',()=>{
    allProductsCardContainerProductsPage.innerHTML = ""
    productsData().forEach((item)=>{
        if(item.rating === 3){
            makeNewProductCards(item)
        }
    })
})
ratingFourStarFilterBox.addEventListener('click',()=>{
    allProductsCardContainerProductsPage.innerHTML = ""
    productsData().forEach((item)=>{
        if(item.rating === 4){
            
            makeNewProductCards(item)
        }
    })
})
ratingFiveStarFilterBox.addEventListener('click',()=>{
    allProductsCardContainerProductsPage.innerHTML = ""
    productsData().forEach((item)=>{
        if(item.rating === 5){
            makeNewProductCards(item)
        }
    })
})
highestToLowestFilterBox.addEventListener('click',()=>{
    allProductsCardContainerProductsPage.innerHTML = ""

    const newSortedByPriceArray = productsData().sort((a,b)=> parseInt(b.price)-parseInt(a.price))

    newSortedByPriceArray.forEach((item)=>{
        makeNewProductCards(item)
    })
})
lowestTohighestFilterBox.addEventListener('click',()=>{
    allProductsCardContainerProductsPage.innerHTML = ""

    const newSortedByPriceArray = productsData().sort((a,b)=> parseInt(a.price)-parseInt(b.price))

    newSortedByPriceArray.forEach((item)=>{
        makeNewProductCards(item)
    })
})
modelFilterHpCheckBox.addEventListener('click',()=>{
    allProductsCardContainerProductsPage.innerHTML = ""
    const newFilterByModelHp = productsData().forEach((item)=>{
        if(item.model === 'hp'){
            makeNewProductCards(item)
        }
    })
})
modelFilterAsusCheckBox.addEventListener('click',()=>{
    allProductsCardContainerProductsPage.innerHTML = ""
    const newFilterByModelAsus = productsData().forEach((item)=>{
        if(item.model === 'asus'){
            makeNewProductCards(item)
        }
    })
});
modelFilterAcerCheckBox.addEventListener('click',()=>{
    allProductsCardContainerProductsPage.innerHTML = ""
    const newFilterByModelAcer = productsData().forEach((item)=>{
        if(item.model === 'acer'){
            makeNewProductCards(item)
        }
    })
});

const arrayOfSliderPictures = [
    'url(../img/product-one.png)',
    'url(../img/car-first.jpg)',
    'url(../img/car-second.jpg)',
    'url(../img/car-third.jpg)',
    'url(../img/../img/hero-section-img.png)',

]
setInterval(() => {
    mainHeroSectionTextAndIconProductsPage.style.backgroundImage = arrayOfSliderPictures[0]
    console.log(arrayOfSliderPictures[0])
}, 3000);
prevButtonMainHeroSection.addEventListener('click',()=>{


    mainHeroSectionTextAndIconProductsPage.style.backgroundImage = 'item'
})


// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {slideIndex = 1}    
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//     }
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";  
//     dots[slideIndex-1].className += " active";
//   }
// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

