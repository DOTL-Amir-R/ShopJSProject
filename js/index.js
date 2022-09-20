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

    productsData().map((item)=>{
        const newProductCard = `
        <a href="./more-detail-for-one-product.html">
            <div id="${item.id}" data-rating="${item.rating}" class="product-card-container-products-page box-shadow-one">
                <img class="product-icon" src="${item.icon}" alt="product icon">
                <div class="name-and-model-of-product-container d-flex justify-content-between">
                <div class="name-of-product f-size-20 white-color-fafafa font-weight-500">
                    ${item.name}
                </div>
                <div class="model-of-product f-size-20 white-color-fafafa font-weight-500">
                ${item.model}
                </div>
                </div>
                <div class="prices-of-product-container d-flex flex-column">
                    <div class="new-price-of-product f-size-20 white-color-fafafa fw-bold">
                    ${item.price}
                    </div>
                    <div class="old-price-of-product f-size-14 text-decoration-line-through gray-color-8F8E8E fw-normal">
                        50000T
                    </div>
                </div>
                <div class="more-btn-and-star-review-of-product-container d-flex justify-content-between ">
                    <a href="" class="more-btn-of-product f-size-16 cyan-color-00FFE0">
                        more...
                    </a>
                    <div class="star-review-of-product-container d-flex">
                        ${makeStarsForProducts(item)}
                    </div>
                </div>
            </div> 
            </a>
        `
        allProductsCardContainerProductsPage.innerHTML  += newProductCard
    })

const productsArray = [...allProductsCardContainerProductsPage.children] 

productsArray.forEach((product)=>{
    product.addEventListener('click',()=>{
        productsData().forEach((backData)=>{
            if(Number(product.id) === backData.id  ){
                const currentProduct = backData

                 const test03 = `
                <div id="${backData.id}" class="main-product-container d-flex flex-column align-items-center">
                <div class="name-of-product f-size-30 font-weight-500 my-3 py-3 ">
                    ${backData.name}
                </div>
                <div class="product-img-container d-flex gap-30 justify-content-center">
                    <img class="width-26-percentage box-shadow-one" src="${backData.icon}">
                    <div class="details-for-product width-39-percentage f-size-18 fw-normal box-shadow-one pt-2 ps-2">
                        ${backData.moreDetails}
                    </div>
                    <div class="buy-product-container padd-20 box-shadow-one d-flex flex-column">
                        <div class="price-of-product f-size-18 fw-normal">
                        ${backData.price}
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
                            ${backData.color}
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
                localStorage.setItem('moreDetailsData',JSON.stringify(test03))


            }
            
        })

    })
})

deleteAllFilters.addEventListener('click',()=>{
    allProductsCardContainerProductsPage.innerHTML = ""
    productsData().forEach((item)=>{
            const newProductCard = `
            <a href="./more-detail-for-one-product.html">
            <div id="${item.id}" data-rating="${item.rating}" class="product-card-container-products-page box-shadow-one">
                <img class="product-icon" src="${item.icon}" alt="product icon">
                <div class="name-and-model-of-product-container d-flex justify-content-between">
                <div class="name-of-product f-size-20 white-color-fafafa font-weight-500">
                    ${item.name}
                </div>
                <div class="model-of-product f-size-20 white-color-fafafa font-weight-500">
                ${item.model}
                </div>
                </div>
                <div class="prices-of-product-container d-flex flex-column">
                    <div class="new-price-of-product f-size-20 white-color-fafafa fw-bold">
                    ${item.price}
                    </div>
                    <div class="old-price-of-product f-size-14 text-decoration-line-through gray-color-8F8E8E fw-normal">
                        50000T
                    </div>
                </div>
                <div class="more-btn-and-star-review-of-product-container d-flex justify-content-between ">
                    <a href="" class="more-btn-of-product f-size-16 cyan-color-00FFE0">
                        more...
                    </a>
                    <div class="star-review-of-product-container d-flex">
                        ${makeStarsForProducts(item)}
                    </div>
                </div>
            </div> 
        </a>
        `
            
        allProductsCardContainerProductsPage.innerHTML  += newProductCard
    })
})

ratingOneStarFilterBox.addEventListener('click',()=>{
    allProductsCardContainerProductsPage.innerHTML = ""
    productsData().forEach((item)=>{
        if(item.rating === 1){
            
            const newProductCard = `
            <a href="./more-detail-for-one-product">
            <div id="${item.id}" data-rating="${item.rating}" class="product-card-container-products-page box-shadow-one">
                <img class="product-icon" src="${item.icon}" alt="product icon">
                <div class="name-and-model-of-product-container d-flex justify-content-between">
                <div class="name-of-product f-size-20 white-color-fafafa font-weight-500">
                    ${item.name}
                </div>
                <div class="model-of-product f-size-20 white-color-fafafa font-weight-500">
                ${item.model}
                </div>
                </div>
                <div class="prices-of-product-container d-flex flex-column">
                    <div class="new-price-of-product f-size-20 white-color-fafafa fw-bold">
                    ${item.price}
                    </div>
                    <div class="old-price-of-product f-size-14 text-decoration-line-through gray-color-8F8E8E fw-normal">
                        50000T
                    </div>
                </div>
                <div class="more-btn-and-star-review-of-product-container d-flex justify-content-between ">
                    <a href="" class="more-btn-of-product f-size-16 cyan-color-00FFE0">
                        more...
                    </a>
                    <div class="star-review-of-product-container d-flex">
                        ${makeStarsForProducts(item)}
                    </div>
                </div>
            </div> 
        </a>
        `
            
            allProductsCardContainerProductsPage.innerHTML  += newProductCard

        }
    })
})
ratingTwoStarFilterBox.addEventListener('click',()=>{
    allProductsCardContainerProductsPage.innerHTML = ""
    productsData().forEach((item)=>{
        if(item.rating === 2){
            
            const newProductCard = `
            <a href="./more-detail-for-one-product.html">
            <div id="${item.id}" data-rating="${item.rating}" class="product-card-container-products-page box-shadow-one">
                <img class="product-icon" src="${item.icon}" alt="product icon">
                <div class="name-and-model-of-product-container d-flex justify-content-between">
                <div class="name-of-product f-size-20 white-color-fafafa font-weight-500">
                    ${item.name}
                </div>
                <div class="model-of-product f-size-20 white-color-fafafa font-weight-500">
                ${item.model}
                </div>
                </div>
                <div class="prices-of-product-container d-flex flex-column">
                    <div class="new-price-of-product f-size-20 white-color-fafafa fw-bold">
                    ${item.price}
                    </div>
                    <div class="old-price-of-product f-size-14 text-decoration-line-through gray-color-8F8E8E fw-normal">
                        50000T
                    </div>
                </div>
                <div class="more-btn-and-star-review-of-product-container d-flex justify-content-between ">
                    <a href="" class="more-btn-of-product f-size-16 cyan-color-00FFE0">
                        more...
                    </a>
                    <div class="star-review-of-product-container d-flex">
                        ${makeStarsForProducts(item)}
                    </div>
                </div>
            </div> 
        </a>
        `
            
            allProductsCardContainerProductsPage.innerHTML  += newProductCard
        }
    })
})
ratingThreeStarFilterBox.addEventListener('click',()=>{
    allProductsCardContainerProductsPage.innerHTML = ""
    productsData().forEach((item)=>{
        if(item.rating === 3){
            
            const newProductCard = `
            <a href="./more-detail-for-one-product.html">
            <div id="${item.id}" data-rating="${item.rating}" class="product-card-container-products-page box-shadow-one">
                <img class="product-icon" src="${item.icon}" alt="product icon">
                <div class="name-and-model-of-product-container d-flex justify-content-between">
                <div class="name-of-product f-size-20 white-color-fafafa font-weight-500">
                    ${item.name}
                </div>
                <div class="model-of-product f-size-20 white-color-fafafa font-weight-500">
                ${item.model}
                </div>
                </div>
                <div class="prices-of-product-container d-flex flex-column">
                    <div class="new-price-of-product f-size-20 white-color-fafafa fw-bold">
                    ${item.price}
                    </div>
                    <div class="old-price-of-product f-size-14 text-decoration-line-through gray-color-8F8E8E fw-normal">
                        50000T
                    </div>
                </div>
                <div class="more-btn-and-star-review-of-product-container d-flex justify-content-between ">
                    <a href="" class="more-btn-of-product f-size-16 cyan-color-00FFE0">
                        more...
                    </a>
                    <div class="star-review-of-product-container d-flex">
                        ${makeStarsForProducts(item)}
                    </div>
                </div>
            </div> 
        </a>
        `
            
            allProductsCardContainerProductsPage.innerHTML  += newProductCard
        }
    })
})
ratingFourStarFilterBox.addEventListener('click',()=>{
    allProductsCardContainerProductsPage.innerHTML = ""
    productsData().forEach((item)=>{
        if(item.rating === 4){
            
            const newProductCard = `
            <a href="./more-detail-for-one-product.html">
            <div id="${item.id}" data-rating="${item.rating}" class="product-card-container-products-page box-shadow-one">
                <img class="product-icon" src="${item.icon}" alt="product icon">
                <div class="name-and-model-of-product-container d-flex justify-content-between">
                <div class="name-of-product f-size-20 white-color-fafafa font-weight-500">
                    ${item.name}
                </div>
                <div class="model-of-product f-size-20 white-color-fafafa font-weight-500">
                ${item.model}
                </div>
                </div>
                <div class="prices-of-product-container d-flex flex-column">
                    <div class="new-price-of-product f-size-20 white-color-fafafa fw-bold">
                    ${item.price}
                    </div>
                    <div class="old-price-of-product f-size-14 text-decoration-line-through gray-color-8F8E8E fw-normal">
                        50000T
                    </div>
                </div>
                <div class="more-btn-and-star-review-of-product-container d-flex justify-content-between ">
                    <a href="" class="more-btn-of-product f-size-16 cyan-color-00FFE0">
                        more...
                    </a>
                    <div class="star-review-of-product-container d-flex">
                        ${makeStarsForProducts(item)}
                    </div>
                </div>
            </div> 
        </a>
        `
            
            allProductsCardContainerProductsPage.innerHTML  += newProductCard
        }
    })
})
ratingFiveStarFilterBox.addEventListener('click',()=>{
    allProductsCardContainerProductsPage.innerHTML = ""
    productsData().forEach((item)=>{
        if(item.rating === 5){
            const newProductCard = `
            <a href="./more-detail-for-one-product.html">
            <div id="${item.id}" data-rating="${item.rating}" class="product-card-container-products-page box-shadow-one">
                <img class="product-icon" src="${item.icon}" alt="product icon">
                <div class="name-and-model-of-product-container d-flex justify-content-between">
                <div class="name-of-product f-size-20 white-color-fafafa font-weight-500">
                    ${item.name}
                </div>
                <div class="model-of-product f-size-20 white-color-fafafa font-weight-500">
                ${item.model}
                </div>
                </div>
                <div class="prices-of-product-container d-flex flex-column">
                    <div class="new-price-of-product f-size-20 white-color-fafafa fw-bold">
                    ${item.price}
                    </div>
                    <div class="old-price-of-product f-size-14 text-decoration-line-through gray-color-8F8E8E fw-normal">
                        50000T
                    </div>
                </div>
                <div class="more-btn-and-star-review-of-product-container d-flex justify-content-between ">
                    <a href="" class="more-btn-of-product f-size-16 cyan-color-00FFE0">
                        more...
                    </a>
                    <div class="star-review-of-product-container d-flex">
                        ${makeStarsForProducts(item)}
                    </div>
                </div>
            </div> 
        </a>
        `
            
            allProductsCardContainerProductsPage.innerHTML  += newProductCard
        }
    })
})
highestToLowestFilterBox.addEventListener('click',()=>{
    allProductsCardContainerProductsPage.innerHTML = ""

    const newSortedByPriceArray = productsData().sort((a,b)=> parseInt(b.price)-parseInt(a.price))

    newSortedByPriceArray.forEach((item)=>{
        const newProductCard = `
        <a href="./more-detail-for-one-product.html">
        <div id="${item.id}" data-rating="${item.rating}" class="product-card-container-products-page box-shadow-one">
            <img class="product-icon" src="${item.icon}" alt="product icon">
            <div class="name-and-model-of-product-container d-flex justify-content-between">
            <div class="name-of-product f-size-20 white-color-fafafa font-weight-500">
                ${item.name}
            </div>
            <div class="model-of-product f-size-20 white-color-fafafa font-weight-500">
            ${item.model}
            </div>
            </div>
            <div class="prices-of-product-container d-flex flex-column">
                <div class="new-price-of-product f-size-20 white-color-fafafa fw-bold">
                ${item.price}
                </div>
                <div class="old-price-of-product f-size-14 text-decoration-line-through gray-color-8F8E8E fw-normal">
                    50000T
                </div>
            </div>
            <div class="more-btn-and-star-review-of-product-container d-flex justify-content-between ">
                <a href="" class="more-btn-of-product f-size-16 cyan-color-00FFE0">
                    more...
                </a>
                <div class="star-review-of-product-container d-flex">
                    ${makeStarsForProducts(item)}
                </div>
            </div>
        </div> 
    </a>
    `
        
        allProductsCardContainerProductsPage.innerHTML  += newProductCard
    })
})
lowestTohighestFilterBox.addEventListener('click',()=>{
    allProductsCardContainerProductsPage.innerHTML = ""

    const newSortedByPriceArray = productsData().sort((a,b)=> parseInt(a.price)-parseInt(b.price))

    newSortedByPriceArray.forEach((item)=>{
        const newProductCard = `
        <a href="./more-detail-for-one-product.html">
        <div id="${item.id}" data-rating="${item.rating}" class="product-card-container-products-page box-shadow-one">
            <img class="product-icon" src="${item.icon}" alt="product icon">
            <div class="name-and-model-of-product-container d-flex justify-content-between">
            <div class="name-of-product f-size-20 white-color-fafafa font-weight-500">
                ${item.name}
            </div>
            <div class="model-of-product f-size-20 white-color-fafafa font-weight-500">
            ${item.model}
            </div>
            </div>
            <div class="prices-of-product-container d-flex flex-column">
                <div class="new-price-of-product f-size-20 white-color-fafafa fw-bold">
                ${item.price}
                </div>
                <div class="old-price-of-product f-size-14 text-decoration-line-through gray-color-8F8E8E fw-normal">
                    50000T
                </div>
            </div>
            <div class="more-btn-and-star-review-of-product-container d-flex justify-content-between ">
                <a href="" class="more-btn-of-product f-size-16 cyan-color-00FFE0">
                    more...
                </a>
                <div class="star-review-of-product-container d-flex">
                    ${makeStarsForProducts(item)}
                </div>
            </div>
        </div> 
    </a>
    `
        
        allProductsCardContainerProductsPage.innerHTML  += newProductCard
    })
})
