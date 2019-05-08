'use strict';
 
 
let cont = document.getElementsByClassName('container')[0],
    imgArray = ['./img/image.jpeg', './img/tele.jpeg' ],
    imgOne = document.getElementById('one'),
    imgTwo = document.getElementById('two'),
    imgThree = document.getElementById('three'),
    imgFour = document.getElementById('four');
    
 
let start = Date.now();
 
function count () {
 
    let timePassed = Date.now() - start; 
 
    line(timePassed);
 
}
 
setInterval(count, 100);
 

function line(timePassed) {
 
    imgOne.style.top  = -(timePassed/20).toFixed() + 'px';
    
    //if (-(timePassed/20).toFixed() <  -700) {
    //    cont.removeChild(cont.getElementsByTagName('img')[0]);
    //}
 
}
 
//function one () {
 
   // for (let i = 0; i < 2; i++) {
 
 //       let img = document.createElement('img');
 
   //     img.src = imgArray[i];
  //      cont.appendChild(img);
  //  }
 
//}
 
//setInterval(one, 3000);
 
 
//function removeImg () {
 
  //  cont.removeChild(cont.getElementsByTagName('img')[0]);
    // cont.removeChild(cont.getElementsByTagName('img')[1]);
 
//}
 
//setInterval(removeImg, 4000);