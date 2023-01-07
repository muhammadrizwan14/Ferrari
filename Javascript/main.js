


//slider top video
let show=0;
 
function control(x){
    show= show + x;
    slideshow(show);

}



function slideshow(num){
    let slides=document.getElementsByClassName("slide");

if(num == slides.length){
    show=0;
    num=0;
} 
if(num < 0 ){
    show=slides.length-1;
    num= slides.length-1;
}

for(y of slides){
    y.style.display="none";
}

    slides[num].style.display="block";
}


slideshow(show);



// sldider 2

let shown=0;
 
function controle(x){
    shown= shown + x;
    slideshown(shown);

}



function slideshown(num){
    let slid=document.getElementsByClassName("news");

if(num == slid.length){
    shown=0;
    num=0;
} 
if(num < 0 ){
    shown=slid.length-1;
    num= slid.length-1;
}

for(y of slid){
    y.style.display="none";
}

    slid[num].style.display="block";
}


slideshown(shown);





function hide() {
    var x = document.getElementById("show");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


  function hide1() {
    var x = document.getElementById("show1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function hide2() {
    var x = document.getElementById("show2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function hide3() {
    var x = document.getElementById("show3");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }