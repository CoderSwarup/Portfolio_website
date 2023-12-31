
//  right kest
let slide = document.querySelectorAll('.slide')
let counter = 0

slide.forEach((img, index) => {
    // console.log(img, index);
    img.style.left = `${index * 100}%`
})



let slideimg = () => {


    if (counter > slide.length - 1) {
        counter = slide.length - 1
    }

    if (counter <0) {
        counter = 0
    }
    // console.log(counter);
    slide.forEach(img => {

        img.style.transform = `translateX(-${counter * 100}%)`

    })  

}

const onnext = () => {
    counter++;
    // console.log(counter);
    slideimg()
}


const onprev = () => {
    counter--;
    // console.log(counter);
    slideimg()
}









//  top bottom
let slide1 = document.querySelectorAll('.slide1')
let counter1 = 0

slide1.forEach((img, index) => {
    // console.log(img, index);
    img.style.top = `${index * 100}%`
})



let slideimg1 = () => {


    if (counter1 > slide1.length - 1) {
        counter1 = slide1.length - 1
    }

    if (counter1 <0) {
        counter1 = 0
    }
    // console.log(counter);
    slide1.forEach(img => {

        img.style.transform = `translateY(-${counter1 * 100}%)`

    })  

}

const onbottom = () => {
    counter1++;
    // console.log(counter);
    slideimg1()
}


const ontop = () => {
    counter1--;
    // console.log(counter);
    slideimg1()
}

