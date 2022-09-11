import productsData from "../data/data-base.js";
const allProductsCardContainerProductsPage = document.getElementById('all-products-card-container-products-page')

const ratingOneStarFilterBox = document.getElementById('rating-one-star-filter-box')
const ratingTwoStarFilterBox = document.getElementById('rating-two-star-filter-box')
const ratingThreeStarFilterBox = document.getElementById('rating-three-star-filter-box')
const ratingFourStarFilterBox = document.getElementById('rating-four-star-filter-box')
const ratingFiveStarFilterBox = document.getElementById('rating-five-star-filter-box')

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
}

productsData().map((item)=>{
    const newProductCard = `
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
    `
    allProductsCardContainerProductsPage.innerHTML  += newProductCard
})
const productsArray = [...allProductsCardContainerProductsPage.children] 

productsArray.forEach((product)=>{
    product.addEventListener('click',()=>{
        productsData().forEach((backData)=>{
            if(Number(product.id) === backData.id  ){
                console.log(backData.reviews)
                const test02 = backData

            }
            
        })

    })
})


ratingOneStarFilterBox.addEventListener('click',()=>{
    allProductsCardContainerProductsPage.innerHTML = ""
    productsData().forEach((item)=>{
        if(item.rating === 1){
            
            const newProductCard = `
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
            `
            
            allProductsCardContainerProductsPage.innerHTML  += newProductCard
            console.log(item.rating)
        }
    })
})
ratingTwoStarFilterBox.addEventListener('click',()=>{
    allProductsCardContainerProductsPage.innerHTML = ""
    productsData().forEach((item)=>{
        if(item.rating === 2){
            
            const newProductCard = `
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
            `
            
            allProductsCardContainerProductsPage.innerHTML  += newProductCard
        }
    })
})