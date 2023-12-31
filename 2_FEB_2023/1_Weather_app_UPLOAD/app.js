const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
// const img = "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"

const container = document.querySelector('.container')

const generate_data = async (city) => {
    container.innerHTML = "Loading....."
    const data = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    data.then((res) => {
        return res.json()
    }).then((data) => {
        load(data);
    }).catch((err) => {
        console.log("data not found" + err);
        container.innerHTML = "Data Not Found"
    })
}


const load = (data) => {
    // // console.log(data.name);
    // console.log(data);
    container.innerHTML = `
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    <h1>${data.main.temp} °C</h1>
    <h2>${data.name}</h2>
    <div class="temp">
        <h3>Max : ${data.main.temp_max} °C</h3>
        <h3>Min : ${data.main.temp_min} °C</h3>
    </div>
    `

}

const search = document.getElementById('search')
search.addEventListener('keypress', (e) => {
    // e.preventDefault()
    // console.log(e.key);
    if (e.key === 'Enter') {
        console.log(search.value);
        generate_data(search.value)
        search.value = ""
    }
})