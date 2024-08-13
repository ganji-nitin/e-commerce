// let fetchData = async ()=>{
//     let data = await fetch("https://fakestoreapi.com/products")
//     console.log(data)
//     let output = await data.json()
//     console.log(output)
//     // console.log(output[0])
// }
// fetchData()

let user = document.getElementById("welcome2")
user.innerHTML=localStorage.getItem("username")

// fetch("https://fakestoreapi.com/products")
// .then((res)=>{
//     res.json()
//     .then((output)=>{
//         output.forEach((ele)=>{
//             let container = document.getElementById("card_container")
//             container.innerHTML+=`
//             <main class="card">
//             <img src="${ele.image}">
//             <h1>${ele.title}</h1>
//             <p>Description: ${ele.description.slice(0,100)}</p>
//             <b>Rs. ${ele.price}</b>
//             <button>ADD TO CART</button>
//             </main>
//             `
//         })
//     })
// })

let fetchData = async ()=>{
    let data = await fetch("https://fakestoreapi.com/products")
    let finalData = await data.json()
    let container = document.getElementById("card_container")
    finalData.forEach((ele)=>{
      container.innerHTML+=`
             <main class="card">
             <img src="${ele.image}">
             <h1>${ele.title}</h1>
             <p>Description: ${ele.description.slice(0,100)}</p>
             <b>Rs. ${ele.price}</b>
             <button onclick="addToCart('${ele.title}',${ele.price},'${ele.image}')">ADD TO CART</button>
             </main>
             `  
    })
}
fetchData()


let count=0;
let cart=[]
let cartValue = document.getElementById("cartValue")
let empty_cart = document.getElementById("empty_cart")
let cartPrice = []
let cart_price = document.getElementById("cart_price")
let addToCart = (productTitle,productPrice,productImg)=>{
  count++;
  cartValue.innerText=count
  let finalObj={
    name:productTitle,
    price:productPrice,
    img:productImg
  }
  cart.push(finalObj)
  // console.log(cart)
  let cart_items = document.getElementById("cart_items")
  cart_items.innerHTML+=`
  <h1>${cart[cart.length-1].name}</h1>
  <img src="${cart[cart.length-1].img}" id="cartImage">
  <h2>Rs. ${cart[cart.length-1].price}</h2>
  `
  empty_cart.style.display="none"
  cartPrice.push(cart[cart.length-1].price)

  let finalPrice = cartPrice.reduce((storage,ele)=>{
    return storage+=ele
  })
  cart_price.innerHTML=`
  <p>Your Total Price is: ${finalPrice}</p>
  `
}