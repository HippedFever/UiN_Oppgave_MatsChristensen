let cart = []

function addToCart(title, price) {
    cart.push({productTitle: title, productPrice: price, productQuantity: 1})

    console.log(cart)
    //etter å ha lagt til et produkt, oppdater handlelistevisning
    renderCart()
    //Vi oppdater label med antall produkter
    document.querySelector("#cart .label").innerHTML = cart.length
}

function renderCart() {
    //Tom variable for å bygge produkter
    let listHTML = ""
    //Gå igjennom cart arrayen, lager en LI for hvert produkt
    cart.map(prod => listHTML += `<li>
    <span class="title">${prod.productTitle}</span>
    <span class="price">${prod.productPrice}</span>
    <span class="quantity">${prod.productQuantity}</span>
    <button class="delete">X</button>
    </li>`)
    //Bruke en selector for å finne riktig UL, og skrive inn listHTML:
    document.querySelector("#cartview ul").innerHTML = listHTML
}

function toggleCart() {
    document.querySelector("#cartview").classList.toggle("hidden")
}