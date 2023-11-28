let img1=document.getElementById("img1")
let button1=document.getElementById("button1")
let img2=document.getElementById("img2")
let button2=document.getElementById("button2")
let  img3=document.getElementById("img3")
let  button3=document.getElementById("button3")
let  img4=document.getElementById("img4")
let  button4=document.getElementById("button4")
let  img5=document.getElementById("img5")
let  button5=document.getElementById("button5")
let flowers=document.getElementById("flowers")
let buttons=document.getElementsByClassName("img-B")
let bigIMG=document.getElementById("bigIMG")
for(let B of buttons){
    B.onclick=function() {
        bigIMG.src=B.src
    }
}
// button1.onclick=function(){
//     img1.style.display="block"
//     img1.style.marginRight="auto"
//     img1.style.marginLeft="auto"
//     img2.style.display="none"
//     img3.style.display="none"
//     img4.style.display="none"
//     img5.style.display="none"
//     console.log(8);
// }

// button2.onclick=function(){
//     img2.style.display="block"
//     img2.style.marginRight="auto"
//     img2.style.marginLeft="auto"
//     img1.style.display="none"
//     img3.style.display="none"
//     img4.style.display="none"
//     img5.style.display="none"
//     console.log(8);
// }

// button3.onclick=function(){
//     img3.style.display="block"
//     img3.style.marginRight="auto"
//     img3.style.marginLeft="auto"
//     img2.style.display="none"
//     img1.style.display="none"
//     img4.style.display="none"
//     img5.style.display="none"
//     console.log(8);
// }

// button4.onclick=function(){
//     img4.style.display="block"
//     img4.style.marginRight="auto"
//     img4.style.marginLeft="auto"
//     img2.style.display="none"
//     img1.style.display="none"
//     img3.style.display="none"
//     img5.style.display="none"
//     console.log(8);
// }

// button5.onclick=function(){
//     img5.style.display="block"
//     img5.style.marginRight="auto"
//     img5.style.marginLeft="auto"
//     img2.style.display="none"
//     img1.style.display="none"
//     img3.style.display="none"
//     img4.style.display="none"
//     console.log(8);
// }