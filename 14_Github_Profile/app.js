const url = "https://api.github.com/users/";
const search = document.getElementById('searchprofile')
const btn = document.getElementById('searchbtn')
const loding = document.querySelector('.loading')
const error = document.querySelector('.error')
const mainload = document.querySelector('.load')



// const loaddata = (Profile) => {
//     return `   
//     <div class="container">
//     <div class="top">
//         <div class="left">
//             <img src="" alt="avatar">
//             <div class="name">
//                 <span>${Profile.name}</span>
//                 <span>swarupbhise@gmal.com</span>
//             </div>
//         </div>
//         <div class="right">
//             <a href=""><button>Check Profile</button></a>
//         </div>
//     </div>
//     <div class="middle">
//         <h1>About</h1>
//         <p>Youtuber | Developer | FullStack Mearn</p>
//     </div>
//     <div class="bottom">

//         <div class="follow">
//             <span class="big">Followers</span>
//             <span>100</span>
//         </div>
//         <div class="following">
//             <span class="big">Following</span>
//             <span>10</span>
//         </div>
//         <div class="repo">
//             <span class="big">Repo</span>
//             <span>80</span>
//         </div>

//     </div>
// </div>`

// }


btn.addEventListener('click', async () => {
    try {
        let username = search.value
        // console.log(username);
        loding.innerHTML = "Loding...."

        const response = await fetch(`${url}${username}`)
        const data = await response.json()

        console.log(data.login);

        if (data.login) {
            loding.innerHTML = ""
            error.innerHTML = ""
            mainload.innerHTML = `   
        <div class="container">
        <div class="top">
            <div class="left">
                <img src="${data.avatar_url}" alt="avatar">
                <div class="name">
                    <span>${data.name}</span>
                    <span>@${data.login}</span>
                </div>
            </div>
            <div class="right">
                <a href="${data.html_url} "target=_blank><button>Check Profile</button></a>
            </div>
        </div>
        <div class="middle">
            <h1>About</h1>
            <p>${data.bio}</p>
        </div>
        <div class="bottom">
    
            <div class="follow">
                <span class="big">Followers</span>
                <span>${data.followers}</span>
            </div>
            <div class="following">
                <span class="big">Following</span>
                <span>${data.following}</span>
            </div>
            <div class="repo">
                <span class="big">Repos</span>
                <span>${data.public_repos}</span>
            </div>
    
        </div>
    </div>`

        } else {
            loding.innerHTML = "!User Is Not Found"
            //   console.log("he");
        }
    } catch (err) {
        setTimeout(() => {
            loding.innerHTML = "Something Wrong"
        }, 700)
    }


})






