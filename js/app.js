
// const confirmBtn = document.getElementById('confirmBtn');
// const totalDisplay = document.getElementById('total');
// const cartSubtotal = document.getElementById('cartSubtotal')

// //grab the menu-div
// const menuDivs = document.querySelectorAll('.menu-div')
// const receipt = document.getElementById('receipt')
// const tipTotal = document.getElementById('tipTotal')

// let subtotal = 0;

// //grab the types
// const menuType = [
//     'appetizers', 
//     'entrees', 
//     'drinks', 
//     'desserts'
// ]

// let receiptArray = []

// confirmBtn.addEventListener('click', (e)=> {
//     e.preventDefault()
//     const subtotal = parseFloat(cartSubtotal.innerText)
//     const tipAmt = parseFloat(document.getElementById('tipAmt').value)
//     const otherAmt = parseFloat(document.getElementById('otherAmt').value)
//     const yourTip = document.getElementById('yourTip')

//     let receiptTip = isNaN(tipAmt) ? otherAmt : (subtotal * tipAmt)


//     let total;

//     isNaN(tipAmt) ? total = subtotal + otherAmt : total = (subtotal * tipAmt) + subtotal

//     yourTip.innerText = receiptTip.toFixed(2)

//     totalDisplay.innerText = total.toFixed(2)
// })

// //make receipt
// const makeReceipt =(obj, el)=> {
//     const listItem = document.createElement('li')
//     listItem.classList.add('receipt-item', 'd-flex', 'justify-content-around')

//     const receiptChoice = document.createElement('span')
//     receiptChoice.classList.add('receipt-item', 'd-flex', 'justify-content-around')
//     receiptChoice.innerText = obj.item

//     const receiptQty = document.createElement('span')
//     receiptQty.classList.add('receipt-qty')
//     receiptQty.setAttribute('id', `qty${obj.id}`)
//     receiptQty.innerText = obj.qty

//     const receiptPrice = document.createElement('span')
//     receiptPrice.classList.add('receipt-price')
//     receiptPrice.innerText = obj.price

//     const itemSubtotal = document.createElement('span')
//     itemSubtotal.classList.add('item-Subtotal')
//     itemSubtotal.setAttribute('id', `subTotal${obj.id}`)
//     itemSubtotal.innerText = obj.itemTotal

//     const tip = document.createElement('span')
//     tip.classList.add('tip')
//     tip.setAttribute('id', `tip${obj.id}`)
//     tip.innerText = obj.tip


//     listItem.appendChild(receiptChoice)
//     listItem.appendChild(receiptQty)
//     listItem.appendChild(receiptPrice)
//     listItem.appendChild(itemSubtotal)
//     listItem.appendChild(tip)

    

//     el.appendChild(listItem)

//     console.log(listItem);
// }

// const updateReceipt =(obj, qty, itemTotal)=> {
//     const receiptQty = document.getElementById(`qty${obj.id}`)
//     receiptQty.innerText = qty

//     const itemSubtotal = document.getElementById(`subTotal${obj.id}`)
//     itemSubtotal.innerText = itemTotal.toFixed(2)
// }


// let menuItems = [
//     {
//         id: 1,
//         type: 'appetizers',
//         item: 'salmon dip',
//         desc: 'fresh salmon spread and toast',
//         imgUrl: 'salmon-dip.jpg',
//         price: 10.99,
//         qty: 0
//     },
//     {
//         id: 2,
//         type: 'appetizers',
//         item: 'onion rings',
//         desc: 'deep fried onion rings with comeback sauce',
//         imgUrl: 'onion-ring.jpg',
//         price: 8.99,
//         qty: 0
//     },
//     {
//         id: 3,
//         type: 'appetizers',
//         item: 'guacamole dip',
//         desc: 'fresh guacamole and pico de gallo made to order and served with chips',
//         imgUrl: 'guacamole-dip.jpg',
//         price: 7.99,
//         qty: 0
//     },
//     {
//         id: 4,
//         type: 'appetizers',
//         item: 'spinach & artichoke dip',
//         desc: 'creamy spinach and artichoke dip served with chips',
//         imgUrl: 'spinach-dip.jpg',
//         price: 8.99,
//         qty: 0
//     },
//     {
//         id: 5,
//         type: 'entrees',
//         item: 'chicken sandwich',
//         desc: 'breaded chicken breast on a bun with pickles and lettuce',
//         imgUrl: '',
//         price: 12.99,
//         qty: 0
//     },
//     {
//         id: 6,
//         type: 'entrees',
//         item: 'veggie burger',
//         desc: 'bean veggie patty served with fries',
//         imgUrl: '',
//         price: 12.99,
//         qty: 0
//     },
//     {
//         id: 7,
//         type: 'entrees',
//         item: 'salmon',
//         desc: 'atlantic salmon served over grits with a side of spinach',
//         imgUrl: '',
//         price: 15.99,
//         qty: 0
//     },
//     {
//         id: 8,
//         type: 'entrees',
//         item: 'pizza',
//         desc: 'pepperoni and tomato pizza. 6 slices',
//         imgUrl: '',
//         price: 16.99,
//         qty: 0
//     },
//     {
//         id: 9,
//         type: 'drinks',
//         item: 'lemonade',
//         desc: 'fresh squeezed lemonade',
//         imgUrl: '',
//         price: 3.99,
//         qty: 0
//     },
//     {
//         id: 10,
//         type: 'drinks',
//         item: 'beer',
//         desc: 'beer',
//         imgUrl: '',
//         price: 3.99,
//         qty: 0
//     },
//     {
//         id: 11,
//         type: 'drinks',
//         item: 'wine',
//         desc: 'red wine',
//         imgUrl: '',
//         price: 7.99,
//         qty: 0
//     },
//     {
//         id: 12,
//         type: 'drinks',
//         item: 'milkshake',
//         desc: 'oreo milkshake',
//         imgUrl: '',
//         price: 5.99,
//         qty: 0
//     },
//     {
//         id: 13,
//         type: 'desserts',
//         item: 'sweet potato pie',
//         desc: 'slice sweet potato pie',
//         imgUrl: '',
//         price: 4.99,
//         qty: 0
//     },
//     {
//         id: 14,
//         type: 'desserts',
//         item: 'white chocolate strawberry cheesecake',
//         desc: 'slice of white chocolate strawberry cheesecake',
//         imgUrl: '',
//         price: 4.99,
//         qty: 0
//     },
//     {
//         id: 15,
//         type:'desserts',
//         item: 'chocolate chip cookies',
//         desc: 'a bakers dozen chocolate chip cookies',
//         imgUrl: '',
//         price: 4.99,
//         qty: 0
//     },
//     {
//         id: 16,
//         type: 'desserts',
//         item: 'pudding',
//         desc: ['chocolate', 'vanilla',  'rice'],
//         imgUrl: '',
//         price: 4.99,
//         qty:0
//     }]
    




// menuDivs.forEach(div => {
//     const menuSubheading = document.createElement('h3')
//     menuSubheading.classList.add('menu-subheading', 'text-capitalize')

//     const row = document.createElement('div')
//     row.classList.add('row')
    
//     div.appendChild(menuSubheading)
//     div.appendChild(row)
// })

// for (let i = 0; i < menuType.length; i++) {
//         menuDivs[i].children[0].innerText = menuType[i]
//         menuDivs[i].children[1].setAttribute("id", `${menuType[i]}Row`)
// }

// //load the menu items
// //grab the appRow
// const appRow = document.getElementById('appetizersRow')
// const entreesRow = document.getElementById('entreesRow')
// const drinksRow = document.getElementById('drinksRow')
// const dessertsRow = document.getElementById('dessertsRow')

// menuItems.forEach(item => {
//     const column = document.createElement('div')
//     column.classList.add('col-md-3')
//     const card = document.createElement('div')
//     card.classList.add('card', 'h-100')
//     card.innerHTML = `
//     <img src="images/${item.imgUrl}" alt="${item.desc}" class="img-fluid menu-image card-image-top" />
//     <div class="card-body">
//         <h4 class="card-title">${item.item}</h4>
//         <p class="card-text">${item.desc}</p>
//     </div>
//     <footer class="card-footer">
//         <p class="card-text item-price">${item.price}</p>
//         <button 
//             class="btn btn-danger cart-btn" 
//             id="Btn${item.id}" 
//             data-id="${item.id}"
//             data-price="${item.price}" 
//             data-qty="${item.qty}"
//             data-item="${item.item}">
//             Add to Cart
//         </button>
//         </footer>
//     `
    
//     column.appendChild(card);
//     //appRow.appendChild(column)

//     //switch (menuItems.type)
//     switch(item.type) {
//         case 'appetizers':
//             appRow.appendChild(column)
//             break;
//         case 'entrees':
//             entreesRow.appendChild(column)
//             break;
//         case 'drinks':
//             drinksRow.appendChild(column)
//             break;
//         case 'desserts': 
//             dessertsRow.appendChild(column)
//             break;
//         default:
//             console.log('Error, menu type not listed')
//             break;

//     }
// })

// const cartButtons = document.querySelectorAll('.cart-btn')

// cartButtons.forEach(button => {

//     const price = parseFloat(button.getAttribute('data-price'))
//     let qty = parseFloat(button.getAttribute('data-qty'))
//     const item = button.getAttribute('data-item')
//     const id = parseFloat(button.getAttribute('data-id'))
    
//     button.addEventListener('click', ()=>{

//         qty+=1
//         let itemObj = {
//             id: id,
//             item: item,
//             qty: qty,
//             price: price,
//             itemTotal: qty * price
//         }

//         if (itemObj.qty == 1) {
//             receiptArray = [...receiptArray, itemObj]
//             makeReceipt(itemObj, receipt)
//         } else {
//             for (let i = 0; i < receiptArray.length; i++) {
//                 if (receiptArray[i].id == id) {
//                     receiptArray[i].qty = itemObj.qty++
//                     receiptArray[i].itemTotal = receiptArray[i].qty * price
//                     updateReceipt(receiptArray[i], receiptArray[i].qty, receiptArray[i].itemSubtotal)
//                 }
//             }
//         }
        
//         console.log(receiptArray);

//         subtotal+=price
//         cartSubtotal.innerText = subtotal.toFixed(2)
//     })
// })

const confirmBtn = document.getElementById('confirmBtn');
const totalDisplay = document.getElementById('total');
const cartSubtotal = document.getElementById('cartSubtotal')
const menuDivs = document.querySelectorAll('.menu-div')
const receipt = document.getElementById('receipt')

let subtotal = 0;

let tax = .07;

let receiptArray = []
//grab the types
const menuType = [
    'appetizers', 
    'entrees', 
    'drinks', 
    'desserts'
]

let menuItems = [
    {
        id: 1,
        type: 'appetizers',
        item: 'salmon dip',
        desc: 'fresh salmon spread and toast',
        imgUrl: 'salmon-dip.jpg',
        price: 10.99,
        qty: 10
    },
    {
        id: 2,
        type: 'appetizers',
        item: 'onion rings',
        desc: 'deep fried onion rings with comeback sauce',
        imgUrl: 'onion-ring.jpg',
        price: 8.99,
        qty: 0
    },
    {
        id: 3,
        type: 'appetizers',
        item: 'guacamole dip',
        desc: 'fresh guacamole and pico de gallo made to order and served with chips',
        imgUrl: 'guacamole-dip.jpg',
        price: 7.99,
        qty: 0
    },
    {
        id: 4,
        type: 'appetizers',
        item: 'spinach & artichoke dip',
        desc: 'creamy spinach and artichoke dip served with chips',
        imgUrl: 'spinach-dip.jpg',
        price: 8.99,
        qty: 0
    },
    {
        id: 5,
        type: 'entrees',
        item: 'chicken sandwich',
        desc: 'breaded chicken breast on a bun with pickles and lettuce',
        imgUrl: 'chicken-sandwich.jpg',
        price: 12.99,
        qty: 0
    },
    {
        id: 6,
        type: 'entrees',
        item: 'veggie burger',
        desc: 'bean veggie patty served with fries',
        imgUrl: 'veggie-burger.jpg',
        price: 12.99,
        qty: 0
    },
    {
        id: 7,
        type: 'entrees',
        item: 'salmon',
        desc: 'atlantic salmon served over grits with a side of spinach',
        imgUrl: 'salmon.jpg',
        price: 15.99,
        qty: 0
    },
    {
        id: 8,
        type: 'entrees',
        item: 'pizza',
        desc: 'pepperoni and tomato pizza. 6 slices',
        imgUrl: 'pepperoni-pizza.jpg',
        price: 16.99,
        qty: 0
    },
    {
        id: 9,
        type: 'drinks',
        item: 'lemonade',
        desc: 'fresh squeezed lemonade',
        imgUrl: 'fresh-squeezed-lemonade.jpg',
        price: 3.99,
        qty: 0
    },
    {
        id: 10,
        type: 'drinks',
        item: 'beer',
        desc: 'beer',
        imgUrl: 'beer.jpg',
        price: 3.99,
        qty: 0
    },
    {
        id: 11,
        type: 'drinks',
        item: 'wine',
        desc: 'red wine',
        imgUrl: 'wine.jpg',
        price: 7.99,
        qty: 0
    },
    {
        id: 12,
        type: 'drinks',
        item: 'milkshake',
        desc: 'oreo milkshake',
        imgUrl: 'Oreo-milkshake.jpg',
        price: 5.99,
        qty: 0
    },
    {
        id: 13,
        type: 'desserts',
        item: 'sweet potato pie',
        desc: 'slice sweet potato pie',
        imgUrl: 'sweet-potato-pie.jpg',
        price: 4.99,
        qty: 0
    },
    {
        id: 14,
        type: 'desserts',
        item: 'white chocolate strawberry cheesecake',
        desc: 'slice of white chocolate strawberry cheesecake',
        imgUrl: 'Strawberry-White-Chocolate-Cheesecake.jpg',
        price: 4.99,
        qty: 0
    },
    {
        id: 15,
        type:'desserts',
        item: 'chocolate chip cookies',
        desc: 'a bakers dozen chocolate chip cookies',
        imgUrl: 'cookies.jpg',
        price: 4.99,
        qty: 0
    },
    {
        id: 16,
        type: 'desserts',
        item: 'pudding',
        desc: ['chocolate', 'vanilla',  'rice'],
        imgUrl: 'pudding.jpg',
        price: 4.99,
        qty:0
    }]

    // const chitlinPotPie = {
    //     id: 17,
    //     type: 'entrees',
    //     item: 'chitlin',
    //     desc: 'Jarissas fav dish',
    //     imgUrl: '',
    //     price: 36.99,
    //     qty: 0
    // }

    // menuItems = 


const getTotal=()=> {
    // confirmBtn.addEventListener('click', (e)=> {
    //     e.preventDefault()
        const subtotal = parseFloat(cartSubtotal.innerText)
        const tipAmt = parseFloat(document.getElementById('tipAmt').value)
        const otherAmt = parseFloat(document.getElementById('otherAmt').value)
        const yourTip = document.getElementById('yourTip')
        const theSubtotal = document.getElementById('theSubtotal')
        const taxDisplay = document.getElementById('tax')
        
        
        let taxTotal = subtotal * tax;
        
        let receiptTip = isNaN(tipAmt) ? otherAmt : (subtotal * tipAmt)
        
        let total = isNaN(tipAmt) ? subtotal + otherAmt + taxTotal : receiptTip + subtotal + taxTotal
        
        
        
        
        theSubtotal.innerText = subtotal
        taxDisplay.innerText = taxTotal.toFixed(2)
        yourTip.innerText = receiptTip.toFixed(2)
        totalDisplay.innerText = total.toFixed(2)
    })
}




//make receipt
const makeReceipt =(obj, el)=> {
    const tableRow = document.createElement('tr')
    tableRow.classList.add('receipt-item0', 'text-center')

    const receiptChoice = document.createElement('td')
    receiptChoice.classList.add('receipt-item', 'text-center')
    receiptChoice.innerText = obj.item

    const receiptQty = document.createElement('td')
    receiptQty.classList.add('receipt-qty', 'text-center')
    receiptQty.setAttribute('id', `qty${obj.id}`)
    receiptQty.innerText = obj.qty

    const receiptPrice = document.createElement('td')
    receiptPrice.classList.add('receipt-price', 'text-center')
    receiptPrice.innerText = obj.price

    const itemSubtotal = document.createElement('td')
    itemSubtotal.classList.add('item-Subtotal', 'text-center')
    itemSubtotal.setAttribute('id', `subTotal${obj.id}`)
    itemSubtotal.innerText = obj.itemTotal

    tableRow.appendChild(receiptChoice)
    tableRow.appendChild(receiptQty)
    tableRow.appendChild(receiptPrice)
    tableRow.appendChild(itemSubtotal)

    

    el.appendChild(tableRow)

}

const updateReceipt =(obj, qty, itemTotal)=> {
    const receiptQty = document.getElementById(`qty${obj.id}`)
    receiptQty.classList.add('receipt-qty')
    receiptQty.innerText = qty

    const itemSubtotal = document.getElementById(`subTotal${obj.id}`)
    console.log(obj.itemTotal)
    itemSubtotal.innerText = obj.itemTotal.toFixed(2)

}






menuDivs.forEach(div => {
    const menuSubheading = document.createElement('h3')
    menuSubheading.classList.add('menu-subheading', 'text-capitalize')

    const row = document.createElement('div')
    row.classList.add('row')
    
    div.appendChild(menuSubheading)
    div.appendChild(row)
})

for (let i = 0; i < menuType.length; i++) {
        menuDivs[i].children[0].innerText = menuType[i]
        menuDivs[i].children[1].setAttribute("id", `${menuType[i]}Row`)
}

//load the menu items
//grab the appRow
const appRow = document.getElementById('appetizersRow')
const entreesRow = document.getElementById('entreesRow')
const drinksRow = document.getElementById('drinksRow')
const dessertsRow = document.getElementById('dessertsRow')

menuItems.forEach(item => {
    const column = document.createElement('div')
    column.classList.add('col-md-3')
    const card = document.createElement('div')
    card.classList.add('card', 'h-100')
    card.innerHTML = `
    <img src="images/${item.imgUrl}" alt="${item.desc}" class="img-fluid menu-image card-image-top" />
    <div class="card-body">
        <h4 class="card-title">${item.item}</h4>
        <p class="card-text">${item.desc}</p>
    </div>
    <footer class="card-footer">
        <p class="card-text item-price">${item.price}</p>
        <div class="button-div d-flex justify-content-around">
        <button 
                class="btn btn-danger cart-btn" 
                id="Btn${item.id}" 
                data-id="${item.id}"
                data-price="${item.price}" 
                data-qty="${item.qty}"
                data-item="${item.item}"
            >add to Cart</button>
            <div class="qty-div">
                <button 
                    class="btn btn-primary btn-subtract" 
                    id="btnSubtract${item.id}"
                    data-id="${item.id}"
                    data-qty="${item.qty}"
                    > - </button>
                    <span class="quantity" id="quantity${item.id}">${item.qty}</span>
                    <button 
                    class="btn btn-primary btn-add" 
                    id="btnAdd${item.id}"
                    data-id="${item.id}"
                    data-qty="${item.qty}"
                    > + </button>
            </div>
        </div>
        </footer>
    `
    
    column.appendChild(card);
    //appRow.appendChild(column)

    //switch (menuItems.type)
    switch(item.type) {
        case 'appetizers':
            appRow.appendChild(column)
            break;
        case 'entrees':
            entreesRow.appendChild(column)
            break;
        case 'drinks':
            drinksRow.appendChild(column)
            break;
        case 'desserts': 
            dessertsRow.appendChild(column)
            break;
        default:
            console.log('Error, menu type not listed')
            break;

    }
})

const cartButtons = document.querySelectorAll('.cart-btn')

cartButtons.forEach(button => {

    const price = parseFloat(button.getAttribute('data-price'))
    const item = button.getAttribute('data-item')
    const id = parseFloat(button.getAttribute('data-id'))
    
    button.addEventListener('click', ()=>{
        let qty;
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].id == id ? qty = menuItems[i].qty : null
        }

        console.log(qty);
        addItems(price, qty, item, id)

        // qty+=1
        // let itemObj = {
        //     id: id,
        //     item: item,

        //     qty: qty,
        //     price: price,
        //     itemTotal: qty * price
        // }

        // if (itemObj.qty == 1) {
        //     receiptArray = [...receiptArray, itemObj]
        //     makeReceipt(itemObj, receipt)
        // } else {
        //     for (let i = 0; i < receiptArray.length; i++) {
        //         if (receiptArray[i].id == id) {
        //             receiptArray[i].qty = itemObj.qty++
        //             receiptArray[i].itemTotal = receiptArray[i].qty * price
        //             updateReceipt(receiptArray[i], receiptArray[i].qty, receiptArray[i].itemSubtotal)
        //         }
        //     }
        // }
        
        // // console.log(receiptArray);
        // // console.log(subtotal)
        // subtotal+=price
        // cartSubtotal.innerText = subtotal.toFixed(2)
    })
})

const addItems =(price, qty, item, id)=> {
    
    let itemObj = {
        id,
        item,
        qty,
        price,
        itemTotal: qty * price
    }
    
    console.log(itemObj)
    
    receiptArray = [...receiptArray, itemObj]
    makeReceipt(itemObj, receipt)
    
    subtotal+= price
    cartSubtotal.innerText = subtotal.toFixed(2)
    
    
    if (itemObj.qty == 1) {
        receiptArray = [...receiptArray, itemObj]
        makeReceipt(itemObj, receipt)
        console.log(itemObj);
    } else {
        for (let i = 0; i < receiptArray.length; i++) {
            if (receiptArray[i].id === id) {
                receiptArray[i].qty = itemObj.qty++
                receiptArray[i].itemTotal = receiptArray[i].qty * price
                updateReceipt(receiptArray[i], receiptArray[i].qty, receiptArray[i].itemTotal)
            }
        }
    }
    
    
    // console.log(receiptArray)
}

const btnSubtract = document.querySelectorAll('.btn-subtract')
const btnAdd = document.querySelectorAll('.btn-add')

btnSubtract.forEach(button => {
    
    
    button.addEventListener('click', ()=> {
        // console.log(button)
        const btnQty= parseFloat(button.getAttribute('data-qty'))
        const btnId = parseFloat(button.getAttribute('data-id'))
        const spanQty = document.getElementById(`quantity${btnId}`)

        for (let i = 0; i < menuItems.length; i++) {
            if(menuItems[i].id == btnId && menuItems[i].qty > 0) {
                menuItems[i].qty-=1
                spanQty.innerText = menuItems[i].qty
            }
            
            if (menuItems[i].id == 13) {
                console.log(pudding.qty)
            }
        }
    })
})

console.log(cartButtons[12].dataset.qty)

btnAdd.forEach(button => {

    console.log(button)
    button.addEventListener('click', ()=> {
        const btnQty = parseFloat(button.getAttribute('data-qty'))
        const btnId = parseFloat(button.getAttribute('data-id'))
        const spanQty = document.getElementById(`quantity${btnId}`)

        for (let i = 0; i < menuItems.length; i++) {
            if(menuItems[i].id == btnId && menuItems[i].qty < 20 
                && cartButtons[i].dataset.id == btnId) {
                console.log(cartButtons[i]);
                menuItems[i].qty+=1
                cartButtons[i].setAttribute('data-qty', menuItems[i].qty)
                spanQty.innerText = menuItems[i].qty
            }
        }
    })
})



