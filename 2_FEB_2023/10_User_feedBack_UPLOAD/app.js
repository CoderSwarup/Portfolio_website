let rating = document.querySelector('.rating')
let child = document.querySelectorAll('.child')
let feedback_section = document.querySelector('.feedback_section ')
let btn = document.querySelector('.btn')


let icon;
Array.from(child).forEach(ele => {
    ele.addEventListener('click', (e) => {
        console.log(e.target.parentNode)

        child.forEach(ele => {
            ele.classList.remove('active')
        });

        icon = e.target.parentNode;
        if (!icon.classList.contains('active')) {
            icon.classList.add('active')
        }
    })
})



btn.addEventListener('click', () => {
    console.log(icon)

    let user_feedback;
    let user_feedback_icon;

    if (icon === undefined) {
        user_feedback = ""
        alert('Please Select Feedback')
    } else {
        user_feedback = icon.children[1].innerText
        user_feedback_icon = icon.children[0].innerText;
    }

    if (user_feedback !== "") {
        // console.log(user_feedback, user_feedback_icon)
        feedback_section.innerHTML = `
                 <div class="response">
                 <div class="user_response">
                     <p>${user_feedback_icon}</p>
                     <h3>Your Feedback : ${user_feedback}</h3>
                 </div>
                 <h3>💖 Thanks For Your Feedback <br>
                     its More Important For Me 💖
                 </h3>
                 
                 <div class="f-btn">
                     <a href="index.html">
                         <button class="btn">
                             Go Back
                         </button>
                     </a>
                 </div>
                 
                 </div>`
    }
})