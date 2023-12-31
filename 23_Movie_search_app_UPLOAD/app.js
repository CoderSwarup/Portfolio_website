let url =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const searchclick = document.getElementById("searchclick");
const maininput = document.getElementById("maininput");
let main = document.querySelector(".movie-list");

// search input toggle
searchclick.addEventListener("click", () => {
  const searchtxt = document.querySelector(".searchtxt");
  searchtxt.classList.toggle("none");
  maininput.value = "";
  if (!maininput.value.trim()) {
    setTimeout(() => {
      main.classList.remove("show");
    }, 800);
    // btn2.style.display = "none"
  }
});

// on search movies show
const getMovies = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  showMovies(data);
};
getMovies(APIURL);

const showMovies = (data) => {
  main.innerHTML = "";
  data.results.forEach((result) => {
    const imagePath =
      result.poster_path === null
        ? "img/image-missing.png"
        : IMGPATH + result.poster_path;
    // <img src="${imagePath}" alt="">
    // <div class="details">
    //     <div class="rating_name">
    //         <h3>${result.original_title} </h3>
    //         <button>${result.vote_average}</button>
    //     </div>
    //     <p>${result.overview.slice(0, 100)}</p>
    // </div>
    const box = document.createElement("div");
    box.classList.add("movie");
    box.innerHTML = `      
            <div class="overlay">
                <div class="overlay2"></div>
                <img src="${imagePath}" alt="">
            </div>
            <div class="details">
                <h3>${result.original_title}</h3>
                <p class="release">Realese : ${result.release_date}</p>
                <span><button>Rating : </button><button>${
                  result.vote_average
                }</button></span>
                <p>${result.overview.slice(0, 100)}</p>
            </div>
         
            `;
    main.appendChild(box);
  });
};

maininput.addEventListener("keyup", function (event) {
  getMovies(APIURL);
  if (!maininput.value.trim()) {
    setTimeout(() => {
      main.classList.remove("show");
    }, 300);
  } else {
    getMovies(SEARCHAPI + event.target.value);
    main.classList.add("show");
  }
});

// navbar toggle

const menu = document.querySelector(".menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {
  nav.classList.toggle("right");
});

// // slide

// function carousel() {
//     let carouselslider = document.querySelector(".slider")
//     let list = document.querySelector('.slide-list')
//     let item = document.querySelector('.slide')
//     console.log(carouselslider, list, item);

//     let list2;

//     const speed = 1
//     const width = list.offsetWidth
//     let x = 0
//     let x2 = width

//     function clone() {
//         list2 = list.cloneNode(true)
//         carouselslider.appendChild(list2)
//         list2.style.left = `${width}px`

//     }

//     function moveFirst() {
//         x -= speed

//         if (width >= Math.abs(x)) {
//             list.style.left = `${x}px`

//         } else {
//             x = width
//         }
//     }

//     function moveSecond() {
//         x2 -= speed

//         if (list.offsetWidth >= Math.abs(x2)) {
//             list2.style.left = `${x2}px`
//         } else {
//             x2 = width
//         }
//     }

//     function hover() {
//         clearInterval(a)
//         clearInterval(b)
//     }

//     function unhover() {
//         a = setInterval(moveFirst, 10)
//         b = setInterval(moveSecond, 10)

//     }

//     clone()

//     let a = setInterval(moveFirst, 10)
//     let b = setInterval(moveSecond, 10)

//     // carouselslider.addEventListener("mouseenter", hover)
//     // carouselslider.addEventListener("mouseenter", unhover)

// }

// carousel()

// $(document).ready(function () {
//     $('.slide-list').slick({
//         // prevArrow: '.prearrow',
//         // nextArrow: '.nextarrow',
//         autoplay: true,
//         fade: true,
//         autoplaySpeed: '500'
//     });

// });
