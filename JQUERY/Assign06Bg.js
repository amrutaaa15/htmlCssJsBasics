
let imgArray=['virat2.webp','virat3.webp','virat4.webp','virat5.jpg','virat6.jpeg']
$(()=>{
    $('.box').css({
    height: '500px',
    width:'700px',
    backgroundImage:"url('/imgs/virat1.jpg')",
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover'
    })

    setInterval(()=>{
        changeImg();
    },2000)
})
let j=0;
let changeImg=(()=>{
    $('.box').css({
        backgroundImage:`url('imgs/${imgArray[j]}')`
    })

    if(j==imgArray.length-1){
        j=0;
    }
    else{
        j++;
    }
})