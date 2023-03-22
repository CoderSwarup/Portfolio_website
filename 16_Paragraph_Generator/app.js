console.log("para genarator");

const input = document.getElementById('input')
const btn = document.getElementById('btn')
const container = document.querySelector(".para-container")


const paraarray = [
    `  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, explicabo id ut assumenda a quisquam nulla
        laborum totam vero corporis inventore minus asperiores expedita nostrum iure modi eaque quibusdam dolor
        illo quam impedit, nihil reprehenderit officiis! Aspernatur doloribus numquam nulla laborum fugit,
        veritatis magni optio, tempora laboriosam expedita necessitatibus porro eum. Iusto at quisquam neque.
    </p>`,
    `    <p>Tempora laboriosam expedita Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, explicabo id ut assumenda a quisquam nulla
    laborum totam vero corporis inventore minus asperiores expedita nostrum iure modi eaque quibusdam dolor
    illo quam impedit, nihil reprehenderit officiis! Aspernatur doloribus numquam nulla laborum fugit,
    veritatis magni optio necessitatibus porro eum. Iusto at quisquam neque.
    </p>`,
    `   <p>Nihil reprehenderit officiis! Aspernatur doloribus numquam nulla laborum fugit,
        veritatis Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, explicabo id ut assumenda a quisquam nulla
        laborum totam vero corporis inventore minus asperiores expedita nostrum iure modi eaque quibusdam dolor
        illo quam impedit, magni optio, tempora laboriosam expedita necessitatibus porro eum. Iusto at quisquam neque.
    </p>`,
    ` <p>Consectetur adipisicing elit. Cum, explicabo id ut assumenda a quisquam nulla
        laborum totam vero corporis inventore minus asperiores expedita nostrum iure modi eaque quibusdam dolor
        illo quam impedit, nihil reprehenderit officiis! Aspernatur doloribus numquam nulla laborum fugit,
        veritatis magni optio, tempora laboriosam expedita necessitatibus porro eum. Iusto at quisquam neque.
    </p>`
]
btn.addEventListener('click', (e) => {
    e.preventDefault()
    // console.log(input.value);


    if (input.value <= 0) {
        container.innerHTML = "Please Enter Number greater Than 0"
    }
    else if (input.value > 100) {
        container.innerHTML = "Paragraph Range Longer"
    }
    else {


        let store = ``

        for (let i = 0; i < input.value; i++) {
            // console.log(paraarray[Math.floor(Math.random() * paraarray.length)]);
            store += paraarray[Math.floor(Math.random() * paraarray.length)]
        }
        container.innerHTML = store
    }



    // console.log(store);
    input.value = ""
})