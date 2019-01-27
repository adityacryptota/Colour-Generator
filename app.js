
let container = document.querySelector('.container');

let color = document.querySelector('.color');

let secondCounter  = document.querySelector('.counter');

function randomColor(){
    let randomNumber1 = Math.floor(Math.random() * 256);

    let randomNumber2 = Math.floor(Math.random() * 256);

    let randomNumber3 = Math.floor(Math.random() * 256);

    let counter = 9

    setInterval(() => {
        if(counter == 0){
            counter = 9
        }
        secondCounter.textContent = counter;
        counter--;
    }, 1000);

   

    container.style.backgroundColor = `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`;

    color.textContent = `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`;


}



setInterval(randomColor,9000);
// setInterval(function(){
//     let counter = 9;
//     setInterval(function(){
//         if(counter == 0){
//             counter = 9;
//         }
//         secondCounter.textContent = counter;
//         counter--;
//     },1000);
// },9000);

