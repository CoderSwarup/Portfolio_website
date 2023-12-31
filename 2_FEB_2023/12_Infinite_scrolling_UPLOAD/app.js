let container = document.querySelector('.container')

let limit = 4
let pageCount = 1
let postCount = 1

const Getdata = async () => {
    // document.documentElement.scroll(0, document.documentElement.scrollTop + 760)

    let data = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
    let res = await data.json()
    // console.log(res)
    container.innerHTML = ""
    res.map((ele, index) => {

        let htmldata = `
        <div class="post">
        <p class="id">${ele.id}</p>
        <h2 class="title">${ele.title}</h2>
        <p class="postinfo">${ele.body}</p>
      </div>
        `

        container.innerHTML += htmldata
    })

}

Getdata();

window.addEventListener('scroll', (e) => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement
    // console.log(scrollHeight, Math.ceil(scrollTop + clientHeight), scrollTop, clientHeight)

    if (scrollHeight <= Math.ceil(scrollTop + clientHeight)) {
        // console.log("On bottom")
        setTimeout(() => {
            limit += 3;
            Getdata()
        }, 100)
    }
})