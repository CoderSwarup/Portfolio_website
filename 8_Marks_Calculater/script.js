const calcform = document.getElementById('Markform')


calcform.addEventListener('submit', (e) => {

    const marks = 600;
    e.preventDefault();


    const formdata = new FormData(calcform);
    const data = {}
    formdata.forEach((value, key) => {
        data[key] = +value
    })



    let totalmark = data.sub1 + data.sub2 + data.sub3 + data.sub4 + data.sub5 + data.sub6;
    const percentage = (totalmark / marks) * 100

    // console.log(data, totalmark, percentage);


    const p1 = document.getElementById('p1')
    const p2 = document.getElementById('p2')

    p1.innerHTML = `Total Marks Out Of ${marks} is : ${totalmark}`
    p2.innerHTML = `Percentage is ${percentage.toFixed(2)}%`


    let tg = document.getElementsByTagName('input')


    for (let i = 0; i <= tg.length; i++) {
        tg[i].value = "";
    }


})