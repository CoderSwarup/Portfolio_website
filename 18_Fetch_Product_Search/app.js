console.log("Fetch Product");
// Url 
const url = 'https://fakestoreapi.com/products';

// selector
const container = document.querySelector(".product_container")
const input = document.getElementById('inputtext')

// create HTML  Funcftion
const products = (data) => {
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
    products1.forEach(element => {
        container.innerHTML += products(element)
    });
}

// main function or fetch data function
const fetch_product = () => {
    // Fetching the data from url
    const getdata = fetch(url)
    container.innerHTML = "Loadding Data......"

    // gives the response
    getdata.then((res) => {
        return res.json()
    }).then((data) => {
        //store data value 
        const newdata = data

        // load HTML Function CALL
        render(newdata)

        // checking the search is includes or not 
        const check = (text, search) => {
            return text.toString().toLowerCase().includes(search)
        }

        // on search event 
        input.addEventListener('keyup', (event) => {
            const searchtext = event.target.value.toLowerCase()

            // filter function thet filter out the text
            let filter = newdata.filter((product) => {

                // check function calling 
                const check_title = check(product.title, searchtext)
                const check_description = check(product.description, searchtext)
                const check_price = check(product.price, searchtext)

                //returing the true value array
                return (check_title || check_description || check_price)
            })
            //onkey press value call html load function
            render(filter)

        });

    }).catch((err) => {
        console.log("error");
        container.innerHTML = "RETER AGAIN......."
    })
}


// fetching the data function call
fetch_product();






