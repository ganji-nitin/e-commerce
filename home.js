// let fetchData = async ()=>{
//     let data = await fetch("https://fakestoreapi.com/products")
//     console.log(data)
//     let output = await data.json()
//     console.log(output)
//     console.log(output[0])
// }
// fetchData()


fetch ("https://fakestoreapi.com/products")
.then((res)=>{
    res.json()
    .then((Output)=>{
        let finalOutput1 = Output[0]
        let finalOutput2 = Output[1]
        let finalOutput3 = Output[2]
        let finalOutput4 = Output[3]
        let finalOutput5 = Output[4]
        let finalOutput6 = Output[5]
        let finalOutput7 = Output[6]
        let finalOutput8 = Output[7]
        let finalOutput9 = Output[8]
        let finalOutput10 = Output[9]
        let finalOutput11 = Output[10]
        let finalOutput12 = Output[11]
        let finalOutput13 = Output[12]
        let finalOutput14 = Output[13]
        let finalOutput15 = Output[14]
        let finalOutput16 = Output[15]
        let finalOutput17 = Output[16]
        let finalOutput18 = Output[17]
        let finalOutput19 = Output[18]
        let finalOutput20 = Output[19]
        // console.log(Output)
        let product1 = document.getElementById("product1")
        product1.innerHTML=`
        <h1>Product-ID: ${finalOutput1.id}</h1>
            <h4>Category: ${finalOutput1.category}</h4>
            <h4>Product Name: ${finalOutput1.title}</h4>
            <img src="${finalOutput1.image}">
            <h2> Rs. ${finalOutput1.price}</h2>
            <p>Description: ${finalOutput1.description}</p>
        `
        let product2 = document.getElementById("product2")
        product2.innerHTML=`
        <h1>Product-ID: ${finalOutput2.id}</h1>
            <h4>Category: ${finalOutput2.category}</h4>
            <h4>Product Name: ${finalOutput2.title}</h4>
            <img src="${finalOutput2.image}">
            <h2> Rs. ${finalOutput2.price}</h2>
            <p>Description: ${finalOutput2.description}</p>
        `
        let product3 = document.getElementById("product3")
        product3.innerHTML=`
        <h1>Product-ID: ${finalOutput3.id}</h1>
            <h4>Category: ${finalOutput3.category}</h4>
            <h4>Product Name: ${finalOutput3.title}</h4>
            <img src="${finalOutput3.image}">
            <h2> Rs. ${finalOutput3.price}</h2>
            <p>Description: ${finalOutput3.description}</p>
        `
        let product4 = document.getElementById("product4")
        product4.innerHTML=`
        <h1>Product-ID: ${finalOutput4.id}</h1>
            <h4>Category: ${finalOutput4.category}</h4>
            <h4>Product Name: ${finalOutput4.title}</h4>
            <img src="${finalOutput4.image}">
            <h2> Rs. ${finalOutput4.price}</h2>
            <p>Description: ${finalOutput4.description}</p>
        `
        let product5 = document.getElementById("product5")
        product5.innerHTML=`
        <h1>Product-ID: ${finalOutput5.id}</h1>
            <h4>Category: ${finalOutput5.category}</h4>
            <h4>Product Name: ${finalOutput5.title}</h4>
            <img src="${finalOutput5.image}">
            <h2> Rs. ${finalOutput5.price}</h2>
            <p>Description: ${finalOutput5.description}</p>
        `
        let product6 = document.getElementById("product6")
        product6.innerHTML=`
        <h1>Product-ID: ${finalOutput6.id}</h1>
            <h4>Category: ${finalOutput6.category}</h4>
            <h4>Product Name: ${finalOutput6.title}</h4>
            <img src="${finalOutput6.image}">
            <h2> Rs. ${finalOutput6.price}</h2>
            <p>Description: ${finalOutput6.description}</p>
        `
        let product7 = document.getElementById("product7")
        product7.innerHTML=`
        <h1>Product-ID: ${finalOutput7.id}</h1>
            <h4>Category: ${finalOutput7.category}</h4>
            <h4>Product Name: ${finalOutput7.title}</h4>
            <img src="${finalOutput7.image}">
            <h2> Rs. ${finalOutput7.price}</h2>
            <p>Description: ${finalOutput7.description}</p>
        `
        let product8 = document.getElementById("product8")
        product8.innerHTML=`
        <h1>Product-ID: ${finalOutput8.id}</h1>
            <h4>Category: ${finalOutput8.category}</h4>
            <h4>Product Name: ${finalOutput8.title}</h4>
            <img src="${finalOutput8.image}">
            <h2> Rs. ${finalOutput8.price}</h2>
            <p>Description: ${finalOutput8.description}</p>
        `
        let product9 = document.getElementById("product9")
        product9.innerHTML=`
        <h1>Product-ID: ${finalOutput9.id}</h1>
            <h4>Category: ${finalOutput9.category}</h4>
            <h4>Product Name: ${finalOutput9.title}</h4>
            <img src="${finalOutput9.image}">
            <h2> Rs. ${finalOutput9.price}</h2>
            <p>Description: ${finalOutput9.description}</p>
        `
        let product10 = document.getElementById("product10")
        product10.innerHTML=`
        <h1>Product-ID: ${finalOutput10.id}</h1>
            <h4>Category: ${finalOutput10.category}</h4>
            <h4>Product Name: ${finalOutput10.title}</h4>
            <img src="${finalOutput10.image}">
            <h2> Rs. ${finalOutput10.price}</h2>
            <p>Description: ${finalOutput10.description}</p>
        `
        let product11 = document.getElementById("product11")
        product11.innerHTML=`
        <h1>Product-ID: ${finalOutput11.id}</h1>
            <h4>Category: ${finalOutput11.category}</h4>
            <h4>Product Name: ${finalOutput11.title}</h4>
            <img src="${finalOutput11.image}">
            <h2> Rs. ${finalOutput11.price}</h2>
            <p>Description: ${finalOutput11.description}</p>
        `
        let product12 = document.getElementById("product12")
        product12.innerHTML=`
        <h1>Product-ID: ${finalOutput12.id}</h1>
            <h4>Category: ${finalOutput12.category}</h4>
            <h4>Product Name: ${finalOutput12.title}</h4>
            <img src="${finalOutput12.image}">
            <h2> Rs. ${finalOutput12.price}</h2>
            <p>Description: ${finalOutput12.description}</p>
        `
        let product13 = document.getElementById("product13")
        product13.innerHTML=`
        <h1>Product-ID: ${finalOutput13.id}</h1>
            <h4>Category: ${finalOutput13.category}</h4>
            <h4>Product Name: ${finalOutput13.title}</h4>
            <img src="${finalOutput13.image}">
            <h2> Rs. ${finalOutput13.price}</h2>
            <p>Description: ${finalOutput13.description}</p>
        `
        let product14 = document.getElementById("product14")
        product14.innerHTML=`
        <h1>Product-ID: ${finalOutput14.id}</h1>
            <h4>Category: ${finalOutput14.category}</h4>
            <h4>Product Name: ${finalOutput14.title}</h4>
            <img src="${finalOutput14.image}">
            <h2> Rs. ${finalOutput14.price}</h2>
            <p>Description: ${finalOutput14.description}</p>
        `
        let product15 = document.getElementById("product15")
        product15.innerHTML=`
        <h1>Product-ID: ${finalOutput15.id}</h1>
            <h4>Category: ${finalOutput15.category}</h4>
            <h4>Product Name: ${finalOutput15.title}</h4>
            <img src="${finalOutput15.image}">
            <h2> Rs. ${finalOutput15.price}</h2>
            <p>Description: ${finalOutput15.description}</p>
        `
        let product16 = document.getElementById("product16")
        product16.innerHTML=`
        <h1>Product-ID: ${finalOutput16.id}</h1>
            <h4>Category: ${finalOutput16.category}</h4>
            <h4>Product Name: ${finalOutput16.title}</h4>
            <img src="${finalOutput16.image}">
            <h2> Rs. ${finalOutput16.price}</h2>
            <p>Description: ${finalOutput16.description}</p>
        `
        let product17 = document.getElementById("product17")
        product17.innerHTML=`
        <h1>Product-ID: ${finalOutput17.id}</h1>
            <h4>Category: ${finalOutput17.category}</h4>
            <h4>Product Name: ${finalOutput17.title}</h4>
            <img src="${finalOutput17.image}">
            <h2> Rs. ${finalOutput17.price}</h2>
            <p>Description: ${finalOutput17.description}</p>
        `
        let product18 = document.getElementById("product18")
        product18.innerHTML=`
        <h1>Product-ID: ${finalOutput18.id}</h1>
            <h4>Category: ${finalOutput18.category}</h4>
            <h4>Product Name: ${finalOutput18.title}</h4>
            <img src="${finalOutput18.image}">
            <h2> Rs. ${finalOutput18.price}</h2>
            <p>Description: ${finalOutput18.description}</p>
        `
        let product19 = document.getElementById("product19")
        product19.innerHTML=`
        <h1>Product-ID: ${finalOutput19.id}</h1>
            <h4>Category: ${finalOutput19.category}</h4>
            <h4>Product Name: ${finalOutput19.title}</h4>
            <img src="${finalOutput19.image}">
            <h2> Rs. ${finalOutput19.price}</h2>
            <p>Description: ${finalOutput19.description}</p>
        `
        let product20 = document.getElementById("product20")
        product20.innerHTML=`
        <h1>Product-ID: ${finalOutput20.id}</h1>
            <h4>Category: ${finalOutput20.category}</h4>
            <h4>Product Name: ${finalOutput20.title}</h4>
            <img src="${finalOutput20.image}">
            <h2> Rs. ${finalOutput20.price}</h2>
            <p>Description: ${finalOutput20.description}</p>
        `
    })
})