"use strict";
let scrollBtn=document.querySelector(".scrollBtn");
scrollBtn.addEventListener("click", scrollUpPage)
window.addEventListener("scroll", scrollUpBtnBlock)
function scrollUpBtnBlock(){
    if(window.pageYOffset>document.documentElement.clientHeight/2){
        scrollBtn.style.display="block";       
    }else{
        scrollBtn.style.display="none";       
    }
}
function scrollUpPage(){
    window.scrollTo(0, 0);
}

//mobile menu-i bacel-pakely
let mob=document.querySelector(".mobile-menu");
let menu=document.querySelector(".menu");
let bars=document.querySelector(".fa-bars");
let xmark=mob.querySelector(".fa-xmark");
    mob.addEventListener("click", function(){
        menu.classList.toggle("block");
        bars.classList.toggle("hidden");
        xmark.classList.toggle("block");
    })


//click user-i vra, bacvum e div grancvelu hamar
let user=document.querySelector(".fa-user");
let signBlock=document.querySelector(".signBlock");
let signIn=document.querySelector(".signIn");
let signUp=document.querySelector(".signUp");
let userClose=document.querySelector(".userClose");
let close=document.querySelector(".fa-xmark");
  console.log(close);
user.addEventListener("click", function(){
  signBlock.classList.toggle("signOpen");
    close.addEventListener("click", closeSignBlock)
      function closeSignBlock(){
        signBlock.remove();
        document.body.style.overflowY="auto";
      }
})
function openSignIn(){
    signIn.style.display="block";
}
function openSignUp(){
  signUp.style.display="block";
}



let topsList=[
  {
    nameTop: "Tank top",
    priceTop: "9,900 AMD",
    imgTop: "url(image/27-women-tops.png)",
    imgTopHover: "url(image/27-women-tops-hover.png)",
    typeProduct: "women",
    sortBy: "",
    type: "",
    colour: "",
    size: "",
  },
  {
    nameTop: "Satin embroidered crop top",
    priceTop: "11,900 AMD",
    imgTop: "url(image/28-women-tops.png)",
    imgTopHover: "url(image/28-women-tops-hover.png)",
    typeProduct: "women",
    sortBy: "",
    type: "",
    colour: "",
    size: "",
  },
  {
    nameTop: "Rustic halter top",
    priceTop: "14,500 AMD",
    imgTop: "url(image/29-women-tops.png)",
    imgTopHover: "url(image/29-women-tops-hover.png)",
    typeProduct: "women",
    sortBy: "",
    type: "",
    colour: "",
    size: "",
  },
  {
    nameTop: "Tank top",
    priceTop: "9,900 AMD",
    imgTop: "url(image/30-women-tops.png)",
    imgTopHover: "url(image/30-women-tops-hover.png)",
    typeProduct: "women",
    sortBy: "",
    type: "",
    colour: "",
    size: "",
  },
  {
    nameTop: "Satin embroidered crop top",
    priceTop: "11,900 AMD",
    imgTop: "url(image/31-women-tops.png)",
    imgTopHover: "url(image/31-women-tops-hover.png)",
    typeProduct: "women",
    sortBy: "",
    type: "",
    colour: "",
    size: "",
  },
  {
    nameTop: "Rustic halter top",
    priceTop: "14,500 AMD",
    imgTop: "url(image/32-women-tops.png)",
    imgTopHover: "url(image/32-women-tops-hover.jpg)",
    typeProduct: "women",
    sortBy: "",
    type: "",
    colour: "",
    size: "",
  },
]

//sexmum enq women-i vra bacvum e tvyalnerov mec div
let action=document.querySelector(".action");
let dropdownMenu1=document.querySelector(".dropdown-menu1");
action.addEventListener("click", function(){
  dropdownMenu1.classList.toggle("dropdownMenuOpen");
    
    let close=document.createElement("button");
            close.className="close";
            close.innerHTML="X";
            dropdownMenu1.append(close);
            close.addEventListener("click", closedropdownMenu1)
                function closedropdownMenu1(){
                  dropdownMenu1.remove();
              document.body.style.overflowY="auto";
            }

  let productRange=document.querySelector(".productRange");
  let product=document.querySelector(".product");
  let allClothing=document.querySelector(".allClothing");
    //clik enq anum allClothing-i vra bacvum e tesakanin
  allClothing.addEventListener("click", function(){
      productRange.classList.toggle("productOpen");       
     
      //sexmum enq all clothing-i meji top-i vra bacvum 
      //e div nor nkarnerov ev ir tvyalnerov
    let tops=document.querySelector(".tops");

    tops.addEventListener("click", function(){
      for(let tops of topsList){
        let elementTops=document.createElement("div");
            elementTops.className="topsItem";
            allClothing.append(elementTops);

        let topsItemBox=document.createElement("div");
            topsItemBox.className="topsItemBox";
            elementTops.append(topsItemBox);

        let topsImg=document.createElement("div");
            topsImg.className="topsImg";
            topsImg.style.backgroundImage=tops.imgTop;

            topsImg.addEventListener("mouseover",function(){
              topsImg.style.backgroundImage=tops.imgTopHover;
            })
            topsImg.addEventListener("mouseout",function(){
              topsImg.style.backgroundImage=tops.imgTop;
            })
            
            topsItemBox.append(topsImg)

        let topsText=document.createElement("div");
          topsText.className="topsText";
          topsText.innerHTML=`
            <h3>${tops.nameTop}</h3>
            <p>${tops.priceTop}</p>
            <i class="fa-regular fa-heart" style="color: #000000;"></i>
          `
          topsItemBox.append(topsText);
        }
      })   
  })
})


//stexcum em hagustneri blokery (kananc, txamardkanc);
let clothesList=[
  {
    name: "Lilac ruffled crop top",
    price: "7,900 AMD",
    img: "url(image/9-woman.jpg)",
    imgHover: "url(image/18-woman-only-1.jpg)",
    typeProduct: "women",
    sortBy: "",
    type: "",
    colour: "",
    size: "",
  },
  {
    name: "Satin halter top",
    price: "11,900 AMD",
    img: "url(image/10-woman.jpg)",
    imgHover: "url(image/19-woman-only-2.jpg)",
    typeProduct: "women",
    sortBy: "",
    type: "",
    colour: "",
    size: "",
  },
  {
    name: "Tie-dye ribbed top",
    price: "9,900 AMD",
    img: "url(image/11-woman.jpg)",
    imgTop: "url(image/29-women-tops.png)",
    imgHover: "url(image/20-woman-only-3.jpg)",
    typeProduct: "women",
    sortBy: "",
    type: "",
    colour: "",
    size: "",
  },
  {
    name: "Print short sleeve shirt",
    price: "7,900 AMD",
    img: "url(image/13-man.jpg)",
    imgHover: "url(image/21-man-only.jpg)",
    typeProduct: "men",
    sortBy: "",
    type: "",
    colour: "",
    size: "",
  },
  {
    name: "Floral print short sleeve shirt",
    price: "11,900 AMD",
    img: "url(image/14-man.jpg)",
    imgTop: "url(image/31-women-tops.png)",
    imgHover: "url(image/22-man-only.jpg)",
    typeProduct: "men",
    sortBy: "",
    type: "",
    colour: "",
    size: "",
  },
  {
    name: "Embroidered short sleeve shirt",
    price: "9,900 AMD",
    img: "url(image/15-man.jpg)",
    imgHover: "url(image/23-man-only.jpg)",
    typeProduct: "men",
    sortBy: "",
    type: "",
    colour: "",
    size: "",
  },
]

let women=document.querySelector("#women");
let men=document.querySelector("#men");

for(let clothes of clothesList){
    //stexcum em kananc ev txamardkanc mec div-ry
  let element=document.createElement("div");
      element.className="clothesItem";

      if(clothes.typeProduct=="women"){
        women.append(element);
      }else{
        men.append(element)
      }

  //texadrum em nkarnery
  let clothesImg=document.createElement("div");
    clothesImg.className="clothesImg";
    clothesImg.style.backgroundImage=clothes.img;
      //hover em anum bolor nkarnery
      clothesImg.addEventListener("mouseover",function(){
        clothesImg.style.backgroundImage=clothes.imgHover;
      })
      clothesImg.addEventListener("mouseout",function(){
        clothesImg.style.backgroundImage=clothes.img;
      })
    element.append(clothesImg)

  //grum em texty
  let clothesText=document.createElement("div");
      clothesText.className="clothesText";
      clothesText.innerHTML=`
        <h3>${clothes.name}</h3>
        <p>${clothes.price}</p>
        <i class="fa-regular fa-heart" style="color: #000000;"></i>
      `
      element.append(clothesText);
}

//carousel
let container=document.querySelector("#container");
let sliderItems=container.querySelectorAll(".containerSlide");
console.log(sliderItems);
let liner=document.querySelectorAll(".liner");
console.log(liner);
let btnPrev=document.querySelector("#btn_prev");
let btnNext=document.querySelector("#btn_next");
let slideNextIndex;
let currentSlideIndex
let currentSlide

sliderItems.forEach(function(slide,index){
  if(index!=0){
    slide.classList.add("hidden")
  }
  sliderItems[0].setAttribute("data-active","")
  slide.dataset.index=index;
  slide.addEventListener("click", nextImg)
  function nextImg(){
      removeDataActiveSlide(slide)
      nextSlideIndexFind(index) 
      nextSlideBlock()
  }
})
btnNext.onclick=function(){
  findActiveSlide()
  nextSlideIndexFind(currentSlideIndex)   
  nextSlideBlock()
}
btnPrev.onclick=function(){
  findActiveSlide()
  prevSlideIndexFind()
  nextSlideBlock()
}
/*setInterval(function(){
  findActiveSlide()
  nextSlideIndexFind(currentSlideIndex)
  nextSlideBlock()
},5000)*/

function nextSlideBlock(){
  let nextSlide=container.querySelector(`[data-index="${slideNextIndex}"]`);
  nextSlide.classList.remove("hidden");
  nextSlide.setAttribute("data-active","");
}
function findActiveSlide(){
  currentSlide=container.querySelector("[data-active]");
  currentSlideIndex= +currentSlide.dataset.index;
  removeDataActiveSlide(currentSlide)
}
function removeDataActiveSlide(activeSlide){
  activeSlide.classList.add("hidden");
  activeSlide.removeAttribute("data-active","");
}
function nextSlideIndexFind(regularIndex){
  if(regularIndex==sliderItems.length-1){
          slideNextIndex=0;
  }else{
      slideNextIndex=regularIndex +1
  }
}
function prevSlideIndexFind(){
  if(currentSlideIndex==0){
      slideNextIndex=sliderItems.length-1;
  }else{
      slideNextIndex=currentSlideIndex-1;
  }
}
