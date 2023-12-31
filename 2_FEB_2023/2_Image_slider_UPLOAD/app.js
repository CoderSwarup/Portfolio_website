let index = 0


function slides(num) {
    let slide = document.querySelectorAll('.slide')
    console.log(slide);

    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none"
    }

    if (num == slide.length) {
        index = 0
        num = 0

    }

    if(num < 0){
        index = slide.length-1
        num = slide.length-1
    }

    slide[num].style.display = "block"

}

const conclick = (x) => {
    index = index + x;
    slides(index)
}


slides(0)