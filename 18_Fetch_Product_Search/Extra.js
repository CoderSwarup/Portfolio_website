console.log("Fetch Product");
// Url 
const url = 'https://fakestoreapi.com/products';

// selector
const container = document.querySelector(".product_container")
// console.log(container);
const input = document.getElementById('inputtext')


// create HTML  Funcftion
const products = (data) => {
    // console.log("hhehe");
    return `
<div class="product_card">
<div class="product_img">
    <img src="${data.image}" alt="">
</div>
<div class="product_details">
    <h2>${data.title}</h2>
    <p>${data.description}</p>
    <button>${data.price}$</button>
</div>
</div>
`
}



// load HTML Function
const render = (products1) => {
    container.innerHTML = ""
    // console.log(products);
    products1.forEach(element => {
        // console.log(element);
        container.innerHTML += products(element)
    });
}


// main function or fetch data function
const fetch_product = () => {
    // Fetching the data from url
    const getdata = fetch(url)

    // gives the response
    getdata.then((res) => {
        return res.json()
    }).then((data) => {
        // console.log(data[0]);
        // container.innerHTML = products(data[4]);
        // console.log(da);

        //store data value 
        const newdata = data

        // one method to insert data 
        // newdata.forEach((element, index) => {
        //     // console.log(index);
        //     // container.innerHTML += products(newdata[index]);
        //     console.log("lo");

        // })


        // load HTML Function CALL
        render(newdata)

        // checking the search is includes or not 
        const check = (text, search) => {
            return text.toString().toLowerCase().includes(search)
        }

        // on search event 
        input.addEventListener('keyup', (event) => {
            // container.innerHTML += ""
            // value of press key
            const searchtext = event.target.value.toLowerCase()

            // filter function thet filter out the text
            let filter = newdata.filter((product) => {
                // console.log(product.title.toLowerCase().includes(searchtext));
                // console.log(product.title.toLowerCase().includes(searchtext));
                // return product.title.toLowerCase().includes(searchtext);

                // check function calling 
                const check_title = check(product.title, searchtext)
                const check_description = check(product.description, searchtext)
                const check_price = check(product.price, searchtext)

                //returing the true value array
                return (check_title || check_description || check_price)
            })
            // console.log(filter);
            //onkey press value call html load function
            render(filter)

        });

    }).catch((err) => {
        console.log("error");
    })
}


// fetching the data function call
fetch_product();



// method 2 to fetch data
// (
//     async () => {
//         let f = async () => {
//             try {
//                 let r = await fetch(url)
//                 return await r.json()
//             } catch (err) {
//                 console.log("juj");
//             }
//         }
//         // let p = await f()

//         // input.addEventListener('keyup', (event) => {
//         //     const searchtext = event.target.value.toLowerCase()
//         //     // const filter = fetch_product()
//         //     // console.log(searchtext, filter);


//         //     // console.log(p);
//         // })

//     }
// )()




