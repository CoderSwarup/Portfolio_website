console.log("filte");

let usersdatalist = document.querySelector('.usersdata')
let search = document.getElementById('search')


let url = "https://api.github.com/users"

const datafetch = async () => {
    try {
        let res = await fetch(url)
        let data = await res.json()
        console.log(data)

    
        loaddata(data)

        const check = (text, search) => {
            return text.toString().toLowerCase().includes(search)
        }

        // on search event 
        search.addEventListener('keyup', (event) => {
            const searchtext = event.target.value.toLowerCase()

            // filter function thet filter out the text
            let filter = data.filter((product) => {

                // check function calling 
                const check_name = check(product.login, searchtext)
                return (check_name)
            })

            loaddata(filter)
        });



    } catch {
        usersdatalist.innerHTML = "data Not Load"
    }

}

datafetch()

const loaddata = (data) => {
    usersdatalist.innerHTML = ""
    usersdatalist.innerHTML = "Loading...."

    setTimeout(() => {
        usersdatalist.innerHTML = " "
        data.map((e) => {
            let user = document.createElement('div')
            user.classList.add('user')
            user.innerHTML = `
                  <img src="${e.avatar_url}" alt="">
                    <div class="name">
                        <h3>${e.login}</h3>
                        <a href="https://github.com/mojombo">https://github.com/mojombo</a>
                    </div>
                    `
            usersdatalist.appendChild(user)

        })
    }, 800)


}


// search.addEventListener('input', (e) => {
//     let val = e.target.value
//     // console.log(array)
//     array.map((ee)=>{
//         // console.log()
//         let val1 = ee.login.toLowerCase().includes(val.toLowerCase())
//         console.log(val1)
//     })

// })
