const DarkNavLeft = document.querySelector('.DarkNavLeft')
const increase = document.querySelector(".plus")
const decrease = document.querySelector(".minus")
const daNumber = document.querySelector("h4")
const cart = document.querySelector(".navCart")
const CartBox = document.querySelector(".cartBox")
const addTocart = document.querySelector(".addtocart")
const notificationBadge = document.querySelector(".notificat-badge") 
const lightboxModal = document.querySelector("#lightboxmodal")




let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let lights = document.getElementsByClassName("littlethumbmail");
  let thumbOpa = document.getElementsByClassName("thumbmailOPa")
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < lights.length; i++) {
      lights[i].className = lights[i].className.replace(" littlethumbmail-highlight", "");
  }
  for (i = 0; i < thumbOpa.length; i++) {
      thumbOpa[i].className = thumbOpa[i].className.replace(" thumbmailOPacity", "");
  }

  slides[slideIndex-1].style.display = "block";
  lights[slideIndex-1].className += " littlethumbmail-highlight";
  thumbOpa[slideIndex-1].className += " thumbmailOPacity";
} 




let lightboxSlideIndex = 1;
showSlidern(lightboxSlideIndex);

function plusSlided(n) {
  showSlidern(lightboxSlideIndex += n);
}


function currentSlided(n) {
  showSlidern(lightboxSlideIndex = n);
}

function showSlidern(n) {
  let i;
  let slider = document.getElementsByClassName("lightslides");
  let lighter = document.getElementsByClassName("lightlittlethumbmail");
  let thumbOpan = document.getElementsByClassName("lightthumbmailOPa")
  if (n > slider.length) {lightboxSlideIndex = 1}
  if (n < 1) {lightboxSlideIndex = slider.length}
  for (i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";
  }
  for (i = 0; i < lighter.length; i++) {
      lighter[i].className = lighter[i].className.replace(" littlethumbmail-highlight", "");
  }
  for (i = 0; i < thumbOpan.length; i++) {
      thumbOpan[i].className = thumbOpan[i].className.replace(" thumbmailOPacity", "");
  }

  slider[lightboxSlideIndex-1].style.display = "block";
  lighter[lightboxSlideIndex-1].className += " littlethumbmail-highlight";
  thumbOpan[lightboxSlideIndex-1].className += " thumbmailOPacity";
} 


function openNav() {
  document.querySelector(".Menu").style.width = "68%";
  DarkNavLeft.style.width = '32%'
    CartBox.style.display = "none"; 
}

function closeNav() {
  document.querySelector(".Menu").style.width = "0%";
  DarkNavLeft.style.width = '0'
}

increase.addEventListener("click", function () {
  let count = parseInt(daNumber.textContent )  
  let addCount = count + 1
  daNumber.innerHTML = addCount
  
})

decrease.addEventListener("click", function () {
  let count = parseInt(daNumber.textContent )  
  if (  !(count == 0) ) {
    let minusCount = count - 1
    daNumber.innerHTML = minusCount
  }
  
})


// empty cart box
 const  cartbody = document.createElement("div")
  const  cartP = document.createElement("p")
  cartP.innerHTML = "Your cart is empty."
  cartbody.classList.add("thecartBody")
  cartP.classList.add("cartbodyP")


// filledCart
    const  cartfillbody = document.createElement("div")
    const shoethumb = document.createElement("div")
    const cartlist = document.createElement("div")
    const theshoedetails = document.createElement("div")
    const cartbodydetails = document.createElement("p")
    const removeIcon = document.createElement("div")
    const pricenumbers = document.createElement("p")
    const checkoutbutton = document.createElement("button")
    cartbodydetails.innerHTML = "Fall Limited Edition Sneakers"
    checkoutbutton.textContent = "Checkout"
    shoethumb.classList.add("shoethumb")
    removeIcon.classList.add("removeIcon")
    cartfillbody.classList.add("thecartfillBody")
    checkoutbutton.classList.add("checkout")
    cartlist.classList.add("cartlist")
    theshoedetails.append(cartbodydetails)
    theshoedetails.append(pricenumbers)
    cartlist.append(shoethumb)
    cartlist.append(theshoedetails)
    cartlist.append(removeIcon)
    


    let isItemInCart = true
addTocart.addEventListener("click", function () {
  notificationBadge.style.display = "block"
  notificationBadge.innerHTML = daNumber.textContent
  CartBox.style.display = "none"; 
  isItemInCart = false
})




function addItemsToCart () { 
  if (isItemInCart == true ) {
      cartbody.append(cartP)
      CartBox.appendChild(cartbody)
  } else {
    if (parseInt(daNumber.textContent ) == 0 ) {
      cartP.innerHTML = "It's still EMPTY."
       cartbody.append(cartP)
      CartBox.appendChild(cartbody)
    } else{
    totalprice = 125 * parseInt(daNumber.textContent )
    pricenumbers.innerHTML = `<p>$125 x ${parseInt(daNumber.textContent )} <span>$${totalprice}.00</span></p>`
    cartfillbody.appendChild(cartlist)
    cartfillbody.appendChild(checkoutbutton)
     CartBox.appendChild(cartfillbody)
      CartBox.removeChild(cartbody)
    }
  }

    
}
function  removeItemsFromCart () {
      
  if (parseInt(daNumber.textContent ) == 0 ) {
    CartBox.removeChild(cartbody)
  } else {
    CartBox.removeChild(cartfillbody)
  }
} 


cart.addEventListener("click", function () {

  if (CartBox.style.display === "none") {
  CartBox.style.display = "block";
    addItemsToCart()
  } else {
  CartBox.style.display = "none";

  removeItemsFromCart()
  }

})


function openModal() {
    lightboxModal.style.width = "100%"
    lightboxModal.style.height = "100%"
}


function closeModal() {
  lightboxModal.style.width = "0%"
   lightboxModal.style.height = "0%"
}


removeIcon.addEventListener("click", function () {
  cartbody.append(cartP)
 CartBox.removeChild(cartfillbody)
 CartBox.appendChild(cartbody)
 daNumber.textContent  = 0
 notificationBadge.style.display = "none"
})