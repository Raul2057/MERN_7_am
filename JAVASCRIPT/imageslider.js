img_array = ['1.jpg','2.jpg', '3.jpg', '4.jpg','5.jpg']
img_length = img_array.length
console.log(img_length)
i=0

const demofunction=()=>{
    i=i%img_length
    // if(i>4){
    //     i=0
    // }
    document.querySelector('img').src=`img/${img_array[i]}`
    i++
}

let set = setInterval(demofunction,1000)

document.getElementById('btnr').addEventListener('click', demofunction)

document.getElementById('btnl').addEventListener('click',()=>{
    if (i<0){
        i=4;
    };
    document.querySelector('img').src = `img/${img_array[i]}`;
    i--;
})

document.querySelector('.container').addEventListener('mouseenter',()=>{
clearInterval(set)
})
document.querySelector('.container').addEventListener('mouseleave',()=>{
    set = setInterval(demofunction,1500)
})