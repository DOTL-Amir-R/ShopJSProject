export function createProductInBasket(product){
    const putProductInBasket = `
    <div id="${product.id}" class="product-card-container-user-basket-page d-flex justify-content-between p-4 width-71-percentage box-shadow-one">
    <div class="product-details-container d-flex gap-68 ">
        <div class="product-icon-input-counter-container d-flex flex-column gap-4 align-items-center">
            <img class="product-icon" width="200" height="200" src="${product.icon}" alt="product icon">
            <form  class="">
                <input id="counter-of-products-input" class="counter-of-produxts-input" type="number" value="1">
            </form>
        </div>
        <div class="product-more-details-container d-flex flex-column">
            <div class="product-name font-weight-500 f-size-24">
            ${product.name}
            </div>
            <div class="product-color-container d-flex">
                <div class="product-color-text font-weight-500 f-size-24">Color:</div>
                <img class="product-color-icon" src="${product.color}" alt="${product.color}">
            </div>
            <div class="product-store font-weight-500 f-size-24">
                shop:pc center
            </div>
            <div class="product-is-availabe-or-not-container d-flex">
                <div class="product-is-availabe-or-not-text font-weight-500 f-size-24">availabe:</div>
                <img class="product-is-availabe-or-not-icon" src="${product.avaibality}" alt="${product.avaibality}">
            </div>
            <div class="time-of-product-arrive font-weight-500 f-size-24">
                time to arrive from now: 2days
            </div>
            <div class="price-of-product fw-bold f-size-30">
                price:${product.price}
            </div>
        </div>
    </div>
    <img class="more-option align-self-start" src="../img/more-details.svg" alt="more details icon">
    </div>
    `
     return putProductInBasket
}
// export let arrayShared = []